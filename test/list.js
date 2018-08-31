jest.mock('../js/ajax')
const list = require('../js/list')

test('list',(done) => {
  document.body.innerHTML = '<ul id="list"></ul>';
  list('xxx','list', () => {
    const ul = document.getElementById('list');
    const li = ul.querySelectorAll('li');
    expect(li.length).toBe(3)
    expect(document.querySelector('h4').innerHTML).toBe('2222')
    done()
  })
})
