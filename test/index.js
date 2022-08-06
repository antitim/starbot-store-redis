'use strict';

require('chai').should();
const Store = require('..');

describe('Starbot Store', () => {
  it('set and get', async () => {
    const store1 = new Store({
      prefix: 'botName1'
    });
    const store2 = new Store({
      prefix: 'botName2'
    });

    await store1.set('user1', 'bar1');
    await store1.set('user2', 'bar2');
    await store2.set('user1', 'bar3');

    const state1 = await store1.get('user1');
    const state2 = await store1.get('user2');
    const state3 = await store2.get('user1');

    state1.should.equal('bar1');
    state2.should.equal('bar2');
    state3.should.equal('bar3');
  });
  it('JSON parse', async () => {
    const store = new Store({
      prefix: 'botName1'
    });

    await store.set('user1', { key: 1, bar: 'foo' });
    await store.set('user2', [4, 'foo']);

    const state1 = await store.get('user1');
    const state2 = await store.get('user2');

    state1.should.deep.equal({ key: 1, bar: 'foo' });
    state2.should.deep.equal([4, 'foo']);
  });
});
