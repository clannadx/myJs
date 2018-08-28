// 污染.持久化
function assert (expression, message) {
  console.log(expression, message)
  return expression
}

// 用例 test - case
// assert(query('hello', '?hello=test') === 'test', 'test hello = test')
// assert(query('hello', '?hello=') === '', 'test hello = empty')
// assert(query('hello', '?hello=test&hello2=3') === 'test', 'test hello = test with multiple param')
// console.log(query('hello', '?hello=test'))

function testCase (message, tests) {
  var total = 0
  var success = 0
  console.log(message + ":");
  
  for (var test in tests) {
    total += 1
    var ret = tests[test](test)
    if (ret) {
      success += 1
    }
  }
  console.log('success/total  ' + success + '/' + total)
}

// 零散
// 测试用例   断言一般包含在用例里面
testCase('Query', {
  'test hello = test': (message) => {
    assert(query('hello', '?hello=test') === 'test', message)
  },
  'test hello = empty': (message) => {
    assert(query('hello', '?hello=') === '' ,message)
  }
})
