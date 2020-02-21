/* eslint-env jest */

const op = require('../src/js/sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(op.sum(1, 2)).toBe(3);
});

describe('test asynchronously multiply function', () => {
  test('by Promise.then()', () => {
    // Be sure to return the promise - if you omit this return statement,
    // your test will complete before the promise returned from fetchData
    // resolves and then() has a chance to execute the callback.
    return op.multiplyByFour(4).then((result) => {
      expect(result).toBe(16);
    });
  });

  test('by expect().resolve()', () => {
    return expect(op.multiplyByFour(5)).resolves.toBe(20);
  });

  test('by awaiting Promise from async function', async () => {
    const result = await op.multiplyByFour(6);
    expect(result).toBe(24);
  });

  test('by async/await but terser', async () => {
    await expect(op.multiplyByFour(7)).resolves.toEqual(28);
  });
});
