'use strict';

const redis = require("redis");

/**
 * Хранилище использующее объект js для хранения состояния
 */
class StarbotStoreRedis {
  constructor (settings) {
    settings = settings || {};

    const client = redis.createClient({
      host: settings.host || 'localhost',
      port: settings.port || 6379,
      user: settings.user,
      password: settings.password,
      db: settings.db || 0
    });

    this.run = function (botName) {

      return {
        async get (userId) {
          return new Promise(function (resolve, reject) {
            client.get(botName + ':' + userId, function (err, reply) {
              if (reply) {
                resolve(JSON.parse(reply));
              } else {
                reject();
              }
            });
          });
        },
        async set (userId, newState) {
          return new Promise(function (resolve, reject) {
            client.set(botName + ':' + userId, JSON.stringify(newState), function () {
              resolve();
            });
          });
        }
      };
    };
  }
}

module.exports = StarbotStoreRedis;
