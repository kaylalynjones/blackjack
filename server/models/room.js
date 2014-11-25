'use strict';

var mongoose = require('mongoose'),
    RoomSchema = null,
    Room = null;

RoomSchema = new mongoose.Schema({
    name: {type: String, required: true, validate: [nameV, 'name length'], unique: true},
    password: {type: String, required: true, validate: [passwordV, 'passowrd length']},
    creator: {type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},
    createdAt: {type: Date, required: true, default: Date.now}
});

function nameV(v){
    return v.length >= 3 && v.length <= 30;
}

function passwordV(v){
    return v.length > 0;
}

Room = mongoose.model('Room', RoomSchema);
module.exports = Room;
