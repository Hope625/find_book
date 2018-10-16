const jwt = require('jsonwebtoken');

/**
 *
 * 创建token
 * @param {Object} value  [传入对象]
 * @param {String} secret [加密 混淆]
 * @param {Number} indate [过期时间(时/单位)]
 * @returns {String}
 */
function createToken(opt,secret,indate){
  // 计算毫秒
  indate = (60*60)*Number(indate);
  
  //生成 Token
  return jwt.sign(opt, secret, {
    expiresIn: indate // 设置过期时间
  }) 
}
/**
 *
 * 核对token
 * @param {String} token [值]
 * @param {String} secret [混淆加密的值]
 * @param {String} key  [获取key值]
 * @returns {String}
 */
function verifyToken(token,secret,key){
  return jwt.verify(token, secret, function (err, decoded) {
    if(!err){
      return decoded[key]
     }
  })
}

module.exports = {
  createToken,
  verifyToken
}