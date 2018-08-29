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
/**
 * 根据传入的 index 将数组中的某项移除：
 * @param {*} index
 * @param {*} arr
 */
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
/**
 * 移除节点
 * @param {*} node
 */
Pencil.removeNode = node => {
  return node.parentNode.removeChild(node)
}
Pencil.on = (node,type,handle) => {
  node.addEventListener(type,handle,false)
}
module.exports = Pencil
