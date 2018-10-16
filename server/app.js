const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// app.use()注册 编码解析
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 设置静态资源文件夹
app.use(express.static(__dirname + '/static'));

const start = (port)=>{
  console.log('服务启动中...');
  app.listen(port);
  console.log('服务启动成功 端口号为:'+port);
}
start(8081);

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") {
    res.send(200);/*让options请求快速返回*/
  } else{
    next();
  }
});

const GoodsApi = require('./config/controllers/GoodsApi')(app);//注册接口
