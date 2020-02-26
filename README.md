<div align="center">
  <h1>create-package</h1>
  <p>Boring Node.js Package Generator</p>
  
  <div>
    <a href="https://github.com/boringcodes/create-package" aria-label="Commitizen Friendly">
      <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
    </a>
    <a href="https://github.com/boringcodes/create-package" aria-label="GitHub Workflow Status">
      <img src="https://img.shields.io/github/workflow/status/boringcodes/create-package/Publish Package to NPM?style=flat-square">
    </a>
    <a href="https://github.com/boringcodes/create-package" aria-label="Dependencies Status">
      <img src="https://img.shields.io/david/boringcodes/create-package?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@boringcodes/create-package" aria-label="NPM Version">
      <img src="https://img.shields.io/npm/v/@boringcodes/create-package?color=brightgreen&style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@boringcodes/create-package" aria-label="NPM Downloads">
      <img src="https://img.shields.io/npm/dm/@boringcodes/create-package?style=flat-square">
    </a>
    <a href="https://github.com/boringcodes/create-package/blob/master/LICENSE" aria-label="License">
      <img src="https://img.shields.io/github/license/boringcodes/create-package?color=brightgreen&style=flat-square">
    </a>
    <a href="https://github.com/boringcodes">
      <img src="https://img.shields.io/badge/github-@boringcodes-brightgreen?style=flat-square">
    </a>
  </div>
</div>

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
