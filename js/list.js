var ajax = require('./ajax');

function list (url, id, succ) {
  const list = document.getElementById(id)
  const tpl = '<li><h4>{title}</h4><p>作者: {author}</p><div>{des}</div></li>'
  ajax(url, (response) => {
    response = JSON.parse(response)
    let ret = []
    response.forEach(item => {
      ret.push(
        tpl.replace('{title}',item.title)
          .replace('{author}',item.author)
          .replace('{des}',item.des)
      )
    })

    list.innerHTML = ret.join('')
    succ && succ()
  })
}


module.exports = list
