# simple-react-intersection-observer

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A simple wrapper componenet around [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) that provides polyfill if necessary.

## Installation

Install using [Yarn](https://yarnpkg.com):

```sh
yarn add simple-react-intersection-observer
```

or NPM:

```sh
npm install simple-react-intersection-observer --save
```

## Example Code

```js
import ObserverWrapper from 'simple-react-intersection-observer'

<ObserverWrapper>
  <div>
    This will only appear when viewed in the browser.
  </div>
</ObserverWrapper>
```

## License: Apache2

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
