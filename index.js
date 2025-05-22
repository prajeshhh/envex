#!/usr/bin/env node

const program = require("./src/cli");
const Extractor = require("./src/extractor");

program.parse()

module.exports = Extractor
