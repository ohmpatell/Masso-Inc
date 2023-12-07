const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  numberOfRooms: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,    
  },
  reviews: [
    {
      text: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  creatorUserId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Hotel", hotelSchema);
