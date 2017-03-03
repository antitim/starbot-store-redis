# starbot-store-redis [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

## About

Store module for [StarBot](https://github.com/antitim/starbot)

## Installation

```sh
$ npm install --save starbot-store-redis
```

## Options

```js
const bot = new Starbot({
  ...
  store: {
    type: 'starbot-store-redis',
    host: 'localhost', // default 'localhost'
    port: 6379, // default 6379
    user: 'user',
    password: 'password',
    db: 0 // default 0
  },
  ...
});
```


## License

MIT © [antitim](http://vk.com/antitim)


[npm-image]: https://badge.fury.io/js/starbot-store-redis.svg
[npm-url]: https://npmjs.org/package/starbot-store-redis
[travis-image]: https://travis-ci.org/antitim/starbot-store-redis.svg?branch=master
[travis-url]: https://travis-ci.org/antitim/starbot-store-redis
