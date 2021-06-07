# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.10.0](https://github.com/boringcodes/create-package/compare/v1.9.4...v1.10.0) (2021-06-07)

### Features

- **generators/app:** remove deprecated install(), add Package manager to prompt questions ([c0e4b48](https://github.com/boringcodes/create-package/commit/c0e4b48a7f9274ab43f0cce882928f6e06f3d7f4))
- **templates:** add commitlint & new husky config ([c592444](https://github.com/boringcodes/create-package/commit/c5924446526de8321a895082f73b52b461445dbf))

### [1.9.4](https://github.com/boringcodes/create-package/compare/v1.9.3...v1.9.4) (2021-02-14)

### [1.9.3](https://github.com/boringcodes/create-package/compare/v1.9.2...v1.9.3) (2021-02-13)

### Bug Fixes

- **generators/app/templates:** missing types def build output ([a9ba15b](https://github.com/boringcodes/create-package/commit/a9ba15ba7cefa855fb427675a0f0749da4ee9081))

### [1.9.2](https://github.com/boringcodes/create-package/compare/v1.9.1...v1.9.2) (2021-02-13)

### [1.9.1](https://github.com/boringcodes/create-package/compare/v1.9.0...v1.9.1) (2021-02-10)

## [1.9.0](https://github.com/boringcodes/create-package/compare/v1.8.2...v1.9.0) (2021-02-10)

### Features

- **templates:** add @rollup/plugin-commonjs ([a79c614](https://github.com/boringcodes/create-package/commit/a79c6146e51fdfb32eb7f61a0b6e61e6d7f506e2))
- **templates:** change build output dir to build instead of dist ([1ee6896](https://github.com/boringcodes/create-package/commit/1ee6896bb62ea251ee75ddd1157661e749e483ef))

### [1.8.2](https://github.com/boringcodes/create-package/compare/v1.8.1...v1.8.2) (2021-02-10)

### [1.8.1](https://github.com/boringcodes/create-package/compare/v1.8.0...v1.8.1) (2021-02-10)

## [1.8.0](https://github.com/boringcodes/create-package/compare/v1.7.1...v1.8.0) (2021-01-12)

### Features

- **lint-staged:** update glob pattern to ignore /templates dir ([0b752dd](https://github.com/boringcodes/create-package/commit/0b752dd96e5152142bee62ddf6d9d14fed95dc81))
- **templates:** set all packages version to \*, replace old rollup plugins with the new ones ([bd35919](https://github.com/boringcodes/create-package/commit/bd35919890361c34283fef592151d86973958711))

### [1.7.1](https://github.com/boringcodes/create-package/compare/v1.7.0...v1.7.1) (2020-08-26)

### Bug Fixes

- **templates:** add missing rollup-plugin-commonjs package to fix commonjs build ([762aeb4](https://github.com/boringcodes/create-package/commit/762aeb4cf7fe35a5d1fb84bc4e517f2a365d93e8))

## [1.7.0](https://github.com/boringcodes/create-package/compare/v1.6.0...v1.7.0) (2020-04-24)

### Features

- **template:** remove unused .prettierignore ([660e413](https://github.com/boringcodes/create-package/commit/660e413258d1752d8c102c58672abb7ca668b60c))

### Bug Fixes

- **deps:** mistaken putting change-case to devDeps ([9f846e1](https://github.com/boringcodes/create-package/commit/9f846e1a4518180fb58ccadd6597a498dfdb1485))

## [1.6.0](https://github.com/boringcodes/create-package/compare/v1.5.0...v1.6.0) (2020-03-28)

### Features

- **template:** remove @typescript-eslint/parser eslint-config-standard in favor of eslint-config-standard-with-typescript ([13ec183](https://github.com/boringcodes/create-package/commit/13ec18304f19da0d6f004dc8ad69c26986e5eac5))
- **template:** remove unused tslint.json ([e94d428](https://github.com/boringcodes/create-package/commit/e94d4287f5e34ee88d1c1b677da99fb017e24e18))
- **template:** replace pretty-quick with lint-staged, add tsconfig.json ([d5fd206](https://github.com/boringcodes/create-package/commit/d5fd206b8ffeb0f8d7f9719f569a826fbc6f36c3))

### Bug Fixes

- **template:** add @typescript-eslint/parser to dev deps to resolve unmet peer dep ([49e2f25](https://github.com/boringcodes/create-package/commit/49e2f25e8c623419208075b41b3ec4bc6accce85))

## [1.5.0](https://github.com/boringcodes/create-package/compare/v1.4.0...v1.5.0) (2020-03-28)

### Features

- **generator:** remove .github generating ([5ddb543](https://github.com/boringcodes/create-package/commit/5ddb54377439f35ea5d982a43ef49d5d41ca4049))
- **template:** replace tslint with eslint typescript ([3471278](https://github.com/boringcodes/create-package/commit/3471278c31177e26b21026c395e4880b6ea0fc5e))

## [1.4.0](https://github.com/boringcodes/create-package/compare/v1.3.0...v1.4.0) (2020-03-26)

### Features

- **generator:** reduce questions to 4 by asking org instead of homepage, bugs & repository urls ([2f80aa8](https://github.com/boringcodes/create-package/commit/2f80aa80b0ef761171cfc22deb631c3a9563327a))

## [1.3.0](https://github.com/boringcodes/create-package/compare/v1.2.0...v1.3.0) (2020-03-26)

### Features

- **template:** remove unnecessary rollup plugins, update rollup config ([f366ef0](https://github.com/boringcodes/create-package/commit/f366ef0c18dcc3f3c868201c7dbe84018ce34712))
- **template:** update ts config module & target, remove unnecessary ones ([9900cb2](https://github.com/boringcodes/create-package/commit/9900cb2502bad6a069e41e5313b6581f42f9c327))

### Bug Fixes

- **generator:** add change-case to paramCase appname to solve invalid package name ([98492bb](https://github.com/boringcodes/create-package/commit/98492bb72c30f63798a681f9f8776eede6f8579f))

## [1.2.0](https://github.com/boringcodes/create-package/compare/v1.1.0...v1.2.0) (2020-03-25)

### Features

- **packpage:** add prettier to format code ([562ca2c](https://github.com/boringcodes/create-package/commit/562ca2c9cc23210121ab7a8775e7a22d6a0e7cef))
- **template:** add prettier for formating code ([05a716d](https://github.com/boringcodes/create-package/commit/05a716d8654c77f688b0a3cf9ae1274e2e25ce04))
- **template:** publish dist/ instead of root dir to npm ([fe6fc83](https://github.com/boringcodes/create-package/commit/fe6fc835e69176b6a6fbd3177234af72efb9e777))

### Bug Fixes

- **generator:** uncomment this.yarnInstall() ([f1deff9](https://github.com/boringcodes/create-package/commit/f1deff9f496cb693234497c1d16e32e160419c4b))

## [1.1.0](https://github.com/boringcodes/create-package/compare/v1.0.4...v1.1.0) (2020-03-23)

### Features

- **close #12:** add github workflows to template ([#13](https://github.com/boringcodes/create-package/issues/13)) ([e6912ed](https://github.com/boringcodes/create-package/commit/e6912ed200f4758a9e4f70dd2c2385121433f152)), closes [#12](https://github.com/boringcodes/create-package/issues/12)

### Bug Fixes

- **close #12:** .github dir does not get copied ([5a3123b](https://github.com/boringcodes/create-package/commit/5a3123b90ef461ee1dd94c410bbfd7af1bb40605)), closes [#12](https://github.com/boringcodes/create-package/issues/12)

### [1.0.4](https://github.com/boringcodes/create-package/compare/v1.0.3...v1.0.4) (2020-03-23)

### [1.0.3](https://github.com/boringcodes/create-package/compare/v1.0.2...v1.0.3) (2020-03-23)

### [1.0.2](https://github.com/boringcodes/create-package/compare/v1.0.1...v1.0.2) (2020-03-22)

### Bug Fixes

- **close #10:** missing dotfiles in the output ([#11](https://github.com/boringcodes/create-package/issues/11)) ([0855a35](https://github.com/boringcodes/create-package/commit/0855a354f75087722e09e20d80612f9ac435e742)), closes [#10](https://github.com/boringcodes/create-package/issues/10)

### [1.0.1](https://github.com/boringcodes/create-package/compare/v1.0.0...v1.0.1) (2020-03-22)

## [1.0.0](https://github.com/boringcodes/create-package/compare/v0.1.3...v1.0.0) (2020-03-22)

### [0.1.3](https://github.com/boringcodes/create-package/compare/v0.1.2...v0.1.3) (2020-03-22)

### Bug Fixes

- **close #6:** rename to generator-create-package to solve yo does not support scoped package ([#7](https://github.com/boringcodes/create-package/issues/7)) ([8f42b5f](https://github.com/boringcodes/create-package/commit/8f42b5fe189025a1ab4137b3f58ce949cc26c32d)), closes [#6](https://github.com/boringcodes/create-package/issues/6)

### [0.1.2](https://github.com/boringcodes/create-package/compare/v0.1.1...v0.1.2) (2020-03-21)

### [0.1.1](https://github.com/boringcodes/create-package/compare/v0.1.0...v0.1.1) (2020-02-28)

## 0.1.0 (2020-02-28)

### Features

- **#4:** integrate github actions ci ([#5](https://github.com/boringcodes/create-package/issues/5)) ([4a139ec](https://github.com/boringcodes/create-package/commit/4a139ec7d926033d3d093f0ffacd92b36e6a15cb)), closes [#4](https://github.com/boringcodes/create-package/issues/4)
- **close #1:** Init source ([#2](https://github.com/boringcodes/create-package/issues/2)) ([42e2d73](https://github.com/boringcodes/create-package/commit/42e2d7300d72283b99f3131de96cef5c666e1250)), closes [#1](https://github.com/boringcodes/create-package/issues/1) [#1](https://github.com/boringcodes/create-package/issues/1) [#1](https://github.com/boringcodes/create-package/issues/1)
