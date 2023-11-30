const mongoose = require('mongoose');
const userSchema= mongoose.Schema({
    Name: {
     type: String, 
     required: true
    },
    Email: {
        type: String, 
     required: true
    },
    Password:{
        type: String, 
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
  
},
{
    timestamps: true,
})

const userModel = mongoose.model('users', userSchema)
module.exports= userModel;