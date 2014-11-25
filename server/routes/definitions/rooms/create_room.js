'use strict';

var Joi = require('joi'),
    Room = require('../../../models/room');

module.exports = {
    description: 'Add a Room',
    tags:['rooms'],
    validate: {
        payload: {
            name: Joi.string().min(3).max(30).required(),
            password: Joi.string().required()
        }
    },
    handler: function(request, reply){
        request.payload.creator = request.auth.credentials._id;
        var room = new Room(request.payload);
        room.save(function(err){
            reply(room).code(err ? 400 : 200);
        });
    }
};
