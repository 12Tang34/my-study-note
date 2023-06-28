// var fs = require("fs");
// var data = '';
// var readerStream = fs.createReadStream('input.txt');
// readerStream.setEncoding('UTF8')
// readerStream.on('data',function(chunk){
//     data += chunk;
// })
// readerStream.on('end',function(){
//     console.log(data);
// })
// readerStream.on('err',function(){
//     console.log(err.stack);
// })

// console.log("程序执行完毕")
  



// var fs = require("fs");
// var data = '菜鸟学NODE';
// var writerStream = fs.createWriteStream('output.txt');
// writerStream.write(data,'UTF8');
// writerStream.end();
// writerStream.on('finish',function(){
//     console.log("写入完成");
// })

// writerStream.on('error',function(err){
//     console.log(err.stack);
// })

// console.log("程序执行完成")

var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");