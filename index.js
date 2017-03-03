'use strict';

const redis = require('redis');

/**
 * The module uses redis to store state
 */
class StarbotStoreRedis {
  constructor (settings, botName) {
    settings = settings || {};

    const client = redis.createClient({
      host: settings.host || 'localhost',
      port: settings.port || 6379,
      user: settings.user,
      password: settings.password,
      db: settings.db || 0
    });

    this.get = async (userId) => {
      return new Promise((resolve, reject) => {
        client.get(botName + ':' + userId, function (err, reply) {
          if (!err) {
            if (reply) {
              resolve(JSON.parse(reply));
            } else {
              reject();
            }
          } else {
            throw new Error('Redis Error: ' + err);
          }
        });
      });
    };

    this.set = async (userId, newState) => {
      return new Promise((resolve, reject) => {
        client.set(botName + ':' + userId, JSON.stringify(newState), function () {
          resolve();
        });
      });
    };
  }
}

module.exports = StarbotStoreRedis;
