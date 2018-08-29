// testCase  | assert
const Pencil = require('../js/pencil');
describe('test query',() =>{
  test('query',() => {
    //assert
    expect(Pencil.query('hello','?hello=test')).toBe('test')
  })
  test('test hello = empty',() => {
    expect(Pencil.query('hello', '?hello=')).toBe('')
  })
})

describe('test serialize',() => {
  test('test {"hello": "test"}', () => {
    expect(Pencil.serialize({
      'hello': 'test'
    })).toBe('hello=test')
  })
})

describe('test array',() => {
  test('test [1,2,3]', () => {
    expect(Pencil.change([1,2,3])).toBe('123')
  })
})
