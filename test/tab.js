const tab = require('../js/tab.js');
const fs = require('fs');
const path = require('path');

test('tab init',() => {
  document.body.innerHTML = fs.readFileSync(path.resolve(__dirname,'./asset/tab.html'));
  const tab1 = new tab({
    boxId : 'tab'
  })

  expect(tab1.head[0].classList.contains('tab-active')).toBe(true)
  expect(tab1.head[1].classList.contains('tab-active')).toBe(false)
  expect(tab1.body[0].style.display).toBe('block');
  expect(tab1.body[1].style.display).toBe('none');
})


test('tab active', () => {
  document.body.innerHTML = fs.readFileSync(path.resolve(__dirname,'./asset/tab.html'));
  const tab2 = new tab({
    boxId : 'tab'
  })
  tab2.head[1].click()
  expect(tab2.head[0].classList.contains('tab-active')).toBe(false)
  expect(tab2.head[1].classList.contains('tab-active')).toBe(true)
  expect(tab2.body[0].style.display).toBe('none')
  expect(tab2.body[1].style.display).toBe('block')
})
