# simple-react-intersection-observer

[![GitHub license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/eMarketerOSS/simple-react-intersection-observer/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/%40emarketeross%2Fsimple-react-intersection-observer.svg)](https://badge.fury.io/js/%40emarketeross%2Fsimple-react-intersection-observer)
[![CircleCI Status](https://circleci.com/gh/eMarketerOSS/simple-react-intersection-observer.svg?&style=shield&circle-token=36691e1218925ba1b81126f489ee5d47c7d658a2)](https://circleci.com/gh/eMarketerOSS/simple-react-intersection-observer)

A simple wrapper component around [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) that will not lazy load if its being called from the server side or if the browser does not support IntersectionObserver.

## Installation

Install using [Yarn](https://yarnpkg.com):

```sh
yarn add @emarketeross/simple-react-intersection-observer
```

or NPM:

```sh
npm i @emarketeross/simple-react-intersection-observer --save
```

## Example Code

```js
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'

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
