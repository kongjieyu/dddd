var express = require('express')
const mongoose = require('mongoose');
var app = express()
DB_URL = 'mongodb://127.0.0.1:27017/Remember'
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
    console.log('LALALLALA 我连上和芒果数据库啦')
})
//创建用户模型
var UserSchema = new mongoose.Schema({
  username: String,
  age: Number,
});
const User = mongoose.model('User', UserSchema);
// User.create({
//     username: 'Eric',
//     age:30
// }, function(err, doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

User.update({username:'May'},{$set:{age:30}}, function(err, doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})

app.get('/', function(req,res){
    res.send('Remember');
})

app.get('/data', function(req,res){
    User.find({},function(err,doc){
        res.json(doc)
    })
})

app.listen(9093,function(){
    console.log('Listen to the port 9093')
})