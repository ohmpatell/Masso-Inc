const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bookingSchema = new Schema({
  customerId: {
    type: String,
    required: true,
  },
  hotelId: {
    type: String,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  numberOfGuests: {
    type: Number,
    required: true,
  },  
});

module.exports = mongoose.model("Booking", bookingSchema);
