'use strict';

module.exports = function(data){
    console.log('message received from client', data);
    var socket = this;
    socket.broadcast.emit('bGlobalChat', data);
    socket.emit('bGlobalChat', data);
};
