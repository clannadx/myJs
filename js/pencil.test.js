
// 用例 test - case
// assert(query('hello', '?hello=test') === 'test', 'test hello = test')
// assert(query('hello', '?hello=') === '', 'test hello = empty')
// assert(query('hello', '?hello=test&hello2=3') === 'test', 'test hello = test with multiple param')
// console.log(query('hello', '?hello=test'))




// testCase  | assert 
const Pencil = require('./pencil');
test('query',() => {
  //assert
  expect(Pencil.query('hello','?hello=test')).toBe('test')
})