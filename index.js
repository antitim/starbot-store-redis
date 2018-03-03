'use strict';

const redis = require('redis');

/**
 * The module uses redis to store state
 * @class
 */
class StarbotStoreRedis {
  /**
   * Constructor
   * @param {Object} settings Redis.createClient config
   */
  constructor (settings) {
    this.client = redis.createClient({
      ...settings
    });
  }

  /**
   * @param {String} key
   */
  async get (key) {
    return new Promise((resolve, reject) => {
      client.get(key, (err, reply) => {
        if (err) return reject(err);
        
        try {
          const data = JSON.parse(reply);
        } catch (err) {
          return reject(err);
        }

        resolve(data);
      });
    });
  }

  /**
   * @param {String} key 
   * @param {Object} value 
   */
  async set (key, value) {
    return new Promise((resolve, reject) => {
      try {
        const data = JSON.stringify(value);
      } catch(err) {
        return reject(err);
      }

      this.client.set(key, data, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}

module.exports = StarbotStoreRedis;
