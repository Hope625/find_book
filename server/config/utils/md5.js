const crypto = require('crypto');

let encode = value=>{
    let md5 = crypto.createHash('md5');
    return md5.update(value,'utf8').digest('hex');
}

module.exports = {
    encode
}