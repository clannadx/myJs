/* global query */

/**
 * 反序列化 querystring
 * @param {String} url
 * @return {undefined|String}
 */
function query (name, url) {
  var reg = new RegExp('(?:\\?|&)' + name + '=(.*?)(?:&|$)');
  var ret = reg.exec(url) || [];
  return ret[1]
}
