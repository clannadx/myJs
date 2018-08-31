function forEach (arr,callback){
  for(var i = 0;i<arr.length;i++){
    callback(arr[i])
  }
}


describe('forEach',() => {
  test('forEach 1',() => {
    let fn = jest.fn()
    forEach([1,2,3],fn)
    // 调用了多少次
    expect(fn.mock.calls.length).toBe(3)
    //参数
    expect(fn.mock.calls[0][0]).toBe(1)
    expect(fn.mock.calls[2][0]).toBe(3)
    // 参数的存储方式 [[1],[2],[3]]
  })
})


// manual mocks 手册模块
jest.mock('jquery');
const $ = require('jquery');

test('jquery',() => {
  document.body.innerHTML = '<div id="div">111</div>'
  expect($('#div').innerHTML).toBe('111')
})
