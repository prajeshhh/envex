# envex

envex extracts environment variables from your codebase.

It provides both package scenarios:

- library
- binary

## Usage

### as binary

- Install `@prajeshhh/envex` globally

```bash
npm i -g @prajeshhh/envex
```

- Run using `envex`

```bash
envex <path/to/your/codebase>
```

### as library

- Install `@prajeshhh/envex` locally

```bash
npm i @prajeshhh/envex
```

- create `index.js`

```js
const Extractor = require("@prajeshhh/envex");
const { resolve } = require("node:path");

const e = new Extractor(resolve("path/to/your/codebase"), ["ignore", "list"])
  .scan()
  .toList();

console.log(e);
```

> you can define, file/directory names not to scan in ignore list array

## Reference

- [NodeJS Documentation](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [NPM Documentation](https://docs.npmjs.com/)
- [@pr4j3sh/frames](https://pr4j3sh.github.io/frames/)
