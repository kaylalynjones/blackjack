'use strict';

module.exports = function(data){
    var socket = this;
    socket.broadcast.emit('bGlobalChat', data);
    socket.emit('bGlobalChat', data);
};
