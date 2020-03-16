const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

emitter.on('connect', function(username){
    console.log(username + '已连接');
})

emitter.emit('connect', '肖帅');