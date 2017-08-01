var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob';

var insertData = function(db,callback){
    var collection = db.collection('site');
    var data = [{"name":"Zhou","sex":"boy"},{"name":"Zhou2","sex":"girl"}];
    collection.insert(data,function(err,result){
        if(err)
        {
            console.log('error:'+err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR,function(err,db){
    console.log("连接成功");
    insertData(db,function(result){
        console.log(result);
        db.close();
    });
});
