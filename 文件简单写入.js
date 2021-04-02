
//异步写入

//引入fs模块
const fs=require('fs');
fs.writeFile('test.log',"您好文件系统模块\r\n",{flag:'a'},function(err){
    if(err){
        console.log('写入失败');
        return;
    }  
    console.log('写入成功');
});