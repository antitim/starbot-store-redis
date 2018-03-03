'use strict';

require('chai').should();
const Store = require('..');

describe('Starbot Store', () => {
  it('set and get', async () => {
    let store1 = new Store({
      prefix: 'botName1'
    });
    let store2 = new Store({
      prefix: 'botName2'
    });

    await store1.set('user1', 'bar1');
    await store1.set('user2', 'bar2');
    await store2.set('user1', 'bar3');

    let state1 = await store1.get('user1');
    let state2 = await store1.get('user2');
    let state3 = await store2.get('user1');

    state1.should.equal('bar1');
    state2.should.equal('bar2');
    state3.should.equal('bar3');
  });
});
