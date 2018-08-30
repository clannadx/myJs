function delay (callback) {
  setTimeout(() => {
    callback('give you data')
  }, 1000)
}

test('delay',(done) => {  //done 是一个异步测试 等到done执行的时候 执行test测试
  delay((data) => {
    expect(data).toBe('give you data')
    done()
  })
})
