'use strict';

require('chai').should();
const Store = require('..');

describe('Starbot Store', () => {
  it('set and get', async () => {
    let st = new Store();
    let stBot1 = st.run('botName1');
    let stBot2 = st.run('botName2');

    await stBot1.set('user1', 'bar1');
    await stBot1.set('user2', 'bar2');
    await stBot2.set('user1', 'bar3');

    let state1 = await stBot1.get('user1');
    let state2 = await stBot1.get('user2');
    let state3 = await stBot2.get('user1');

    state1.should.equal('bar1');
    state2.should.equal('bar2');
    state3.should.equal('bar3');
  });
});
