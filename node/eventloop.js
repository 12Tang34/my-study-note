var events = require('events');
const { addListener, removeAllListeners, setMaxListeners, listeners, emit } = require('process');
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected(){
    console.log('连接成功。');
    eventEmitter.emit('data_received');
}
eventEmitter.on('connetion', connectHandler);
eventEmitter.on('data_received',function(){
    console.log('数据接收成功。');
});
eventEmitter.emit('connection');
console.log("程序执行完毕。")

removeAllListeners
setMaxListeners(10)
listeners(events)
emit(event,[],[],[])