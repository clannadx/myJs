function ajax(url, succ) {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      succ && succ(xhr.responseText)
    }
  }

  xhr.open('get', url)
  xhr.send(null)

  return xhr
}

module.exports = ajax
