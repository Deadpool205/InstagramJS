var events = require('events');

function Bomb(color){
    this.color = color;
    events.EventEmitter.call(this)

    this.open = function(){
        this.emit('open');
    }
}

Bomb.prototype.__proto__=events.EventEmitter.prototype;

var ourBomb = new Bomb('green');

ourBomb.on('open', function(){
    console.log("kaboom")
});

ourBomb.open();