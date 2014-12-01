'use strict';

module.exports = function(data){
    var socket = this;
    socket.broadcast.emit('globalChat', data);
    socket.emit('globalChat', data);
};
