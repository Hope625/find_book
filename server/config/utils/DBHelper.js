const mysql = require('mysql');

//创建连接池
let connection;

let conn = function(opt){
  connection  = mysql.createConnection(opt);
  
  connection.connect(function(err){
    if(err){
      console.log("连接失败");
    }else{
      // console.log("连接成功");
    }
  });
}

function queryData(sql,callback){
  connection.query(sql,function(err,result){
    if(err){
      callback(err);
      return;
    }
    callback(result);
  });
  
}

//查询数据
conn.select = function(opt,callback){
  var table = opt.table;
  var whereVal = opt.whereVal;
  var filter = opt.filter||"*";
  var screen = opt.screen;
  var dim = opt.dim;
  
  var sql;

  if(whereVal!=undefined){
    sql = "SELECT "+filter+" FROM "+table+" where "+whereVal;
  }else if(screen!=undefined){
    var indexVal = screen.indexVal;
    var start = screen.start;
    var count = screen.count;
    sql = "SELECT "+filter+" FROM "+table+" order by "+indexVal+" asc limit "+start+", "+count;
  }else if(dim!=undefined){
    var indexKey;
    var indexVal;
    for(let key in dim){
      indexKey = key;
      indexVal = dim[key];
    }
    sql = "SELECT "+filter+" FROM "+table +" where "+indexKey+" like '%"+indexVal+"%'";
  }else{
    sql = "SELECT "+filter+" FROM "+table;
  }
  
  queryData(sql,callback);
}

//插入数据
conn.insert = function(opt,callback){
  var table = opt.table;
  var inserts = opt.inserts;

  var keys = inserts[0];
  var keyArr = [];
  for(let key in keys){
    keyArr.push(key);
  }
  keyArr = keyArr.toString();
  keyArr="("+keyArr+")";

  var valStr = "";
  inserts.forEach(items=>{
    var itemStr = "(";
    for(let item in items){
      itemStr+="'"+items[item]+"',"
    }
    itemStr=itemStr.slice(0,-1);
    itemStr+=")"
    valStr+=itemStr+",";
  });
  valStr = valStr.slice(0,-1);

  var sql = "INSERT INTO "+table+" "+keyArr+" VALUES"+valStr;
  queryData(sql,callback);
}


// 更新数据
conn.update = function(opt,callback){
  var table = opt.table;
  var update = opt.update;
  var whereVal = opt.whereVal;

  var arr = [];
  var str = "";
  for(let i in update){
    // console.log(i);
    str += i+"=?,";
    arr.push(update[i]);
  }
  str = str.slice(0,-1);

  var strWhere = "";
  for(let i in whereVal){
    strWhere+=i+"=? and ";
    arr.push(whereVal[i]);
  }
  strWhere = strWhere.slice(0,-4);

  var modSql = "UPDATE "+table+" SET "+str+" WHERE "+strWhere;
  var modSqlParams = arr;
  
  connection .query(modSql,modSqlParams,function (err, result) {
    if(err){
      callback(err.message);
      return;
    }        
   callback(result);
 });
}

conn.remove = function(opt,callback){
  var table = opt.table;
  var index = opt.index;
  var itemStr = ""
  for(let i in index){
    if(index[i].indexOf(',')>=0){
      var items = index[i].split(',');
      items.forEach(item=>{
        itemStr+=i+" = '"+item+"' or ";
      });
    }else{
      itemStr += i+" = '"+index[i] +"' or ";
    }
  }
  itemStr = itemStr.slice(0,-4);
  var delSql = "DELETE FROM "+table+" where "+itemStr;
  queryData(delSql,callback);
}

// 查询
// select({
//   table:'user_list',
//   whereVal:"id=2"
// },function(res){
//   console.log(res)
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


module.exports = {
  conn
}
