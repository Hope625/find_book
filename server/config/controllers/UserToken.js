const token = require('./../utils/token');

// 创建用户token,有效期为24小时
let userToken = function(val){
  return token.createToken({
    username:val
  },"epet",24);
}

// 校验token中的值是否与用户名一致
let checkUser = function(username,tokenVal){
  let res = token.verifyToken(tokenVal,"epet","username");
  if(username === res){
    return "true";
  }else{
    return "false";
  }
}

module.exports = {
  userToken,
  checkUser
}