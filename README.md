# egg-rabbitmq-ex

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-rabbitmq-ex.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-rabbitmq-ex
[travis-image]: https://img.shields.io/travis/eggjs/egg-rabbitmq-ex.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-rabbitmq-ex
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-rabbitmq-ex.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-rabbitmq-ex?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-rabbitmq-ex.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-rabbitmq-ex
[snyk-image]: https://snyk.io/test/npm/egg-rabbitmq-ex/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-rabbitmq-ex
[download-image]: https://img.shields.io/npm/dm/egg-rabbitmq-ex.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-rabbitmq-ex

<!--
Description here.
-->

## Install

```bash
$ npm i egg-rabbitmq-ex --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.rabbitmq = {
  enable: true,
  package: 'egg-rabbitmq-ex',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.rabbitmq = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
