/* global query */

const Pencil = {}

Pencil.query = (name, url) => {
  var reg = new RegExp('(?:\\?|&)' + name + '=(.*?)(?:&|$)');
  var ret = reg.exec(url) || [];
  return ret[1]
}

module.exports  = Pencil