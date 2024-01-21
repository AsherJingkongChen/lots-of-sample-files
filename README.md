# `lots-of-sample-files`

[![NPM Version](https://img.shields.io/npm/v/lots-of-sample-files?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/lots-of-sample-files)

> **Note:** THIS project is still under development. Please do not use it in production.

## What is it for?

With `lots-of-sample-files`, You can get lots of sample files for experiments and testing in Node.js or Deno (should works).

We've provided a simple API for you. You can obtain `lots-of-sample-files` from NPM. Please see the section ["How to Obtain"](#how-to-obtain).

## Try Our Demo

- [_(WIP)_](#try-our-demo)

## How to Obtain

`lots-of-sample-files` provides an NPM package. You can install it with your favorite package managers, and then import it into your tests.

| Package Manager               | Command                             | Shorthand                       |
| ----------------------------- | ----------------------------------- | ------------------------------- |
| [bun](https://bun.sh/)        | `bun install lots-of-sample-files`  | `bun i lots-of-sample-files`    |
| [npm](https://www.npmjs.com/) | `npm install lots-of-sample-files`  | `npm i lots-of-sample-files`    |
| [pnpm](https://pnpm.io/)      | `pnpm install lots-of-sample-files` | `pnpm i lots-of-sample-files`   |
| [yarn](https://yarnpkg.com/)  | `yarn add lots-of-sample-files`     | `yarn add lots-of-sample-files` |

<!-- ## Our Competitors, or Alternatives -->

## Let's Learn How to Use It

```javascript
import { Sample } from 'lots-of-sample-files';

const paths = [...Sample.paths()];
const files = [...Sample.files()];

for (const path of Sample.paths()) {
  if (path.endsWith('.zip')) {
    console.log(path);
  }
}

for (const file of Sample.files()) {
  console.log(file.name, file.type);
}
```

## Resources

- [Media Type Resources](https://github.com/AsherJingkongChen/lots-of-sample-files/blob/main/docs/resources/media-type.md)

## Let's Setup the Project

> **Note:** THIS section is for contributors and developers only

### Recommended IDE Setup for You

- IDEs:
  - [VSCode](https://code.visualstudio.com/)
- Extensions:
  - [Prettier for VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### See What Dependencies We Are Using

- Builders
  - [Vite](https://vitejs.dev/)
- Environments
  - [Node.js v20](https://nodejs.org/)
- Linters
  - [Prettier](https://prettier.io/)
  - [TypeScript](https://www.typescriptlang.org/)
- Testers
  - [Vitest](https://vitest.dev/)

### See What Commands We Are Using

| Package Manager        | Command   | Script      | Description                         |
| ---------------------- | --------- | ----------- | ----------------------------------- |
| `bun` / `npm` / `pnpm` | `install` |             | Install dependencies                |
| `bun` / `npm` / `pnpm` | `run`     | `build`     | Build the library for production    |
| `bun` / `npm` / `pnpm` | `run`     | `check`     | Check the codes with TypeScript     |
| `bun` / `npm` / `pnpm` | `run`     | `dev-build` | Build the library for development   |
| `bun` / `npm` / `pnpm` | `run`     | `format`    | Format codes using Prettier         |
| `bun` / `npm` / `pnpm` | `run`     | `test`      | Run integration tests (after build) |

### Be Aware of These Details

You may encounter some problems during development and deployment.
Please read the following notes carefully.

1. There is no support for Node.js below version 18. Please issue us if you need it.
