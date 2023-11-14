const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Hotel = new Schema({
    name:{
        type:String
    },
    location:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    numberOfRooms:{
        type:Number
    },
    description:{
        type:String
    }
});

module.exports = mongoose.model('Hotel',Hotel);
