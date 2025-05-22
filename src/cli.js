const { Command } = require("commander");
const Extractor = require("./extractor");

const program = new Command();

program
  .name("env-extractor")
  .description("Extract and print all used process.env keys from a directory")
  .version("1.0.0");

program
  .argument("[dir]", "directory to scan", ".")
  .option("-p, --print", "print env vars to terminal line by line")
  .action((dir, options) => {
    const extractor = new Extractor(dir);
    extractor.scan();

    if (options.print) {
      extractor.toList()
        .sort()
        .forEach((key) => console.log(key));
    } else {
      console.log("\n❗ Use --print to output env variables.\n");
    }
  });


module.exports = program;
