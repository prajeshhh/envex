const { Command } = require("commander");
const { resolve } = require("node:path");
const Extractor = require("./extractor");

const program = new Command();

program
  .name("envex")
  .description("extracts environment variables from your codebase")
  .version("1.0.0");

program
  .argument("[path]", "path to your codebase", ".")
  .action((path, options) => {
    const p = resolve(path);
    new Extractor(p).scan().print()
  });


module.exports = program;
