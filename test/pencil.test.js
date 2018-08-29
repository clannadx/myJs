// testCase  | assert
const Pencil = require('../js/pencil');
describe('test mode', () => {
  test('remove node',() => {
    document.body.innerHTML = '<div id="div"><p id="p"></p></div>';
    const div = document.getElementById('div');
    expect(div.nodeName.toLowerCase()).toBe('div');
    const p = document.getElementById('p');
    Pencil.removeNode(p);
    expect(document.getElementById('p')).toBeNull()
  })
})

describe('test on', () => {
    test('on node', () => {
        document.body.innerHTML = '<div id = "div"><button id="btn">按钮</button></div>';
        const btn = document.getElementById('btn');

        Pencil.on(btn,'click',() => {
          btn.innerHTML = 'clicked'
        })
        btn.click()  //模拟点击
        expect(btn.innerHTML).toBe('clicked')
    })
})


