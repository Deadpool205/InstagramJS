var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('plantABomb',function(){
    console.log("a bomb has been planted");
});

eventEmitter.emit('plantABomb');
console.log("Program ended");