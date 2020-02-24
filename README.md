# create-package

## About

Boring NPM Package Generator - @boringapp

## Install

Make sure `yeoman` is installed:

```sh
$ yarn global add yo
```

Then install the generator

```sh
$ yarn global add generator-create-package
```

## Usage

With [yo](https://github.com/yeoman/yo):

```sh
$ yo create-package
```

This scaffolds out:
```
├── CHANGELOG.md
├── README.md
├── package.json
├── rollup.config.js
├── src
│   ├── index.ts
│   └── package-name
│       └── index.ts
├── tsconfig.json
└── tslint.json
```