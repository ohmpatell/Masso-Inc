const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let hotelSchema = new Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  numberOfRooms: {
    type: Number,
  },
  description: {
    type: String,
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
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Hotel", hotelSchema);
