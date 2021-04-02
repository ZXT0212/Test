//引入fs模块
const fs=require('fs');
fs.readFile('test.log',function(err,data){
    if(err){
        console.log('读取失败！');
        return;
    }  
    console.log(data.toString());
});