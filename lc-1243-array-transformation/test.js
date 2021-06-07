const transformArray = require('./index');

test('transformArray function exists', () => {
  expect(typeof transformArray).toEqual('function');
});

test('Returns arr without modification if arr.length < 3', () => {
  expect(transformArray([1,2])).toEqual([1,2]);
});

test('Returns correct array when modification is needed', () => {
  expect(transformArray([1,2,1,2,1,1,1,2,1])).toEqual([1,1,1,1,1,1,1,1,1]);
});