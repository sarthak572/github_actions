const test = require('node:test');
const assert = require('node:assert');
const add = require('./math.js');

test('Addition works correctly', () => {
  assert.strictEqual(add(2, 2), 4);
});

test('Failing test example', () => {
  // If you uncomment the line below, the test will fail and block deployment!
  // assert.strictEqual(add(2, 2), 5); 
});
