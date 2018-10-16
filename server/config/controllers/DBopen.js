const DB = require('../utils/DBHelper');

const conn = DB.conn;

conn({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : '',
  database : 'find_book'
});

let select = conn.select;
let insert = conn.insert;
let remove = conn.remove;
let update = conn.update;

module.exports = {
  select,
  insert,
  remove,
  update
}

// 查询
// select({
//   table:'category',
// },function(res){
//   console.log(res)
// });

// 分页查询
// select({
//   table:"category",
//   screen:{
//     indexVal:"id",
//     start:"1",
//     count:"5"
//   }
// },function(res){
//   console.log(res);
// })

// 模糊查询
// select({
//   table:"category",
//   dim:{
//     name:"生"
//   }
// },function(res){
//   console.log(res);
// });

// 插入
// var opt={
//   table:"user_list",
//   inserts:[{
//     username:"xiaoxiao",
//     password:123456
//   },{
//     username:"dada",
//     password:123456
//   }]
// }
// insert(opt,function(res){
//   console.log(res);
// });


// 更新
// var opt = {
//   table:'user_list',
//   update:{
//     username:"xiaoming",
//     password:123456
//   },
//   whereVal:{id:15}
// }
// update(opt,function(res){
//   console.log(res);
// });

//删除
// var opt ={
//   table:"user_list",
//   index:{
//     id:"1,2",
//     id:"1"
//   }
// remove(opt,function(res){
//   console.log(res);
// });
