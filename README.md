<div align="center">
  <h1>create-package</h1>
  <p>Boring TypeScript Package Generator</p>

  <p>
    <a href="https://github.com/boringcodes/create-package/commits" aria-label="Commitizen Friendly">
      <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
    </a>
    <a href="https://github.com/boringcodes/create-package" aria-label="Prettier Code Style">
      <img src="https://img.shields.io/badge/code_style-prettier-brightgreen?style=flat-square">
    </a>
    <a href="https://github.com/boringcodes/create-package/actions" aria-label="GitHub Workflow Status">
      <img src="https://img.shields.io/github/workflow/status/boringcodes/create-package/publish-npm?style=flat-square">
    </a>
    <a href="https://david-dm.org/boringcodes/create-package" aria-label="Dependencies Status">
      <img src="https://img.shields.io/david/boringcodes/create-package?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/generator-create-package" aria-label="NPM Version">
      <img src="https://img.shields.io/npm/v/generator-create-package?color=brightgreen&style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/generator-create-package" aria-label="NPM Downloads">
      <img src="https://img.shields.io/npm/dm/generator-create-package?style=flat-square">
    </a>
    <a href="https://github.com/boringcodes/create-package/blob/master/LICENSE" aria-label="MIT License">
      <img src="https://img.shields.io/github/license/boringcodes/create-package?color=brightgreen&style=flat-square">
    </a>
    <a href="https://github.com/boringcodes" aria-label="BoringCodes Verified">
      <img src="https://img.shields.io/badge/boringcodes-verified-brightgreen?style=flat-square">
    </a>
  </p>

  <img src="banner.png">
</div>

## Features

- [x] Rollupjs packaging system with TypeScript by default
- [ ] Prettier
- [x] TsLint
- [x] Husky
- [x] Conventional release by **standard-version**
- [x] GitHub actions (build, create github release, publish to npm)

## Installation

Make sure `yeoman` is installed

```sh
$ yarn global add yo
```

Then install the generator

```sh
$ yarn global add generator-create-package
```

## Usage

Create a new directory

```sh
$ mkdir package-name
```

Then navigate to the created directory and run the following command to generate source

```sh
$ yo create-package
```

This scaffolds out:

```
├── src
│   ├── index.ts
├── .huskyrc
├── package.json
├── rollup.config.js
├── tsconfig.json
└── tslint.json
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

[BoringCodes](https://github.com/boringcodes)

## License

[MIT](https://github.com/boringcodes/create-package/blob/master/LICENSE)
