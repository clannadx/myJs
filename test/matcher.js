const Pencil = require('../js/pencil');

test('matchers', () => {
  const a = {
    hello : 'jest'
  }
  const b = {
    hello : 'jest'
  }

  expect(a).toEqual(b)
  expect([1,2,3]).toEqual([1,2,3])
  expect([1,2,3]).toContain(2)
  expect(b).toHaveProperty('hello')
  expect('123').toMatch(/^\d/)
  expect('123').not.toContain('4')
})

describe('removeItemByIndex',() => {
  test('0,[1,2,3]', () => {
    expect(Pencil.removeItemByIndex(0,[1,2,3])).toEqual([2,3])
  })
  test('1,[1,2,3]',() => {
    expect(Pencil.removeItemByIndex(1,[1,2,3])).toEqual([1,3])
  })
  test('null,[1,2,3]',() => {
    expect(Pencil.removeItemByIndex(null,[1,2,3])).toBeUndefined()
  })
  test('5,[1,2,3] 超过数组长度',() => {
    expect(Pencil.removeItemByIndex(5,[1,2,3])).toBeNull()
  })
  test('1,{}非数组', () => {
    expect(Pencil.removeItemByIndex(1,{})).toEqual({})
  })
  test('-1, [1,2,3] 负数', () => {
    expect(Pencil.removeItemByIndex(-1,[1,2,3])).toEqual([1,2])
  })
})

