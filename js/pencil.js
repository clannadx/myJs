/* global query */

const Pencil = {}

Pencil.query = (name, url) => {
  var reg = new RegExp('(?:\\?|&)' + name + '=(.*?)(?:&|$)');
  var ret = reg.exec(url) || [];
  return ret[1]
}

Pencil.serialize = (Obj) => {
  let ret = []
  if (!Obj) {
    return ''
  }
  Object.keys(Obj).forEach(k => {
    ret.push(
      encodeURIComponent(k) + '=' +
      encodeURIComponent(Obj[k])
    )
  })

  return ret.join('&')
}
Pencil.change = (arr) => {
  return  arr.join('')
}
Pencil.removeItemByIndex = (index,arr) => {
  if(!Array.isArray(arr)){
    return arr
  }
  if(index>=arr.length){
    return null
  }
  if(index === null) {
    return undefined
  }
  arr.splice(index,1)
  return arr
}
module.exports = Pencil
