const { readdirSync, lstatSync, readFileSync } = require("node:fs");
const { join } = require("node:path");

class Extractor {
  constructor(dirPath, ignore = ["node_modules", "package-lock.json", "venv"]) {
    if (!dirPath) throw new Error("directory path cannot be empty");
    this.dirPath = dirPath;
    this.ignore = ignore;
    this.expr = /process\.env\.([a-zA-Z_][a-zA-Z0-9_]*)|process\.env\[\s*['"`]([a-zA-Z_][a-zA-Z0-9_]*)['"`]\s*\]/g;
    this.env = new Set();
  }

  extract(payload) {
    let match;
    while ((match = this.expr.exec(payload)) !== null) {
      const key = match[1] || match[2];
      this.env.add(key);
    }
  }

  scan(dirPath = this.dirPath) {
    readdirSync(dirPath)
      .filter(name => !this.ignore.includes(name))
      .forEach(name => {
        const filePath = join(dirPath, name);
        if (lstatSync(filePath).isFile()) {
          const file = readFileSync(filePath, "utf-8");
          this.extract(file);
        } else {
          this.scan(filePath); // recursive scan
        }
      });
  }

  toList() {
    return [...this.env];
  }

  print() {
    this.env.forEach(key => console.log(key));
  }
}

module.exports = Extractor
