'use strict';

var Room = require('../../../models/room');

module.exports = {
    description: 'Get Rooms',
    notes: 'Retrieves all chat rooms',
    tags:['rooms'],
    handler: function(request, reply){
        Room.find(function(err, rooms){
            reply(rooms);
        }).populate('creator');
    }
};
