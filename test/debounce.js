/**
 * 创建 debounce 函数
 * @param {Function} callback
 * @param {Number} time
 */
function createDebounce(callback, time) {
  var timer
  time = time || 300 // 给个默认值

  return function () {
    // 没有 timmer 的时候就生成一个
    // 到时再触发 callback ，即调用一次
    // 以此达到减少调用次数的结果
    if (!timer) {
      timer = setTimeout(() => {
        callback()
        clearTimeout(timer)
        timer = null
      }, time)
    }
  }
}


describe('debounce', () => {
  test('累加结果', (done) => {
    var total = 0
    const debounce = createDebounce(() => {
      total += 1
      expect(total).toBe(1)
      done()
    }, 300)

    for (let i = 0; i < 10; i++) {
      debounce()
    }

    expect(total).toBe(0) //调用十次 debounce 检测total
  })
})
