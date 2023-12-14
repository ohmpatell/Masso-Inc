const Booking = require("../model/booking.model");

// Get customer's bookings
const getCustomerBookings = (req, res, next) => {
  const customerId = req.user._id;
  Booking.find({ customerId })
    .then((bookings) => res.status(200).json(bookings))
    .catch((err) => res.status(400).json({ error: err }));
};
//Get hotel's bookings
const getHotelBookings = (req, res, next) => {
    const hotelId=req.params.id;
  Booking.find({ hotelId })
    .then((bookings) => res.status(200).json(bookings))
    .catch((err) => res.status(400).json({ error: err }));
};
//Get booking
const getBooking = (req, res, next) => {
  Booking.findById(req.params.id)
    .then((hotel) => res.status(200).json(hotel))
    .catch((err) => res.status(400).json({ error: err }));
};

//Create booking
const createBooking = (req, res, next) => {
  const { hotelId, checkInDate, checkOutDate, numberOfGuests, fullPrice } = req.body;
  const customerId = req.user._id;  
  console.log(fullPrice)

  let booking = new Booking({
    customerId,
    hotelId,
    checkInDate,
    checkOutDate,
    numberOfGuests,
    fullPrice,
  });

  booking
    .save()
    .then((savedBooking) => res.status(200).json(savedBooking))
    .catch((err) => res.status(400).json({ error: err }));
};

//Update booking
const updateBooking = (req, res, next) => {
  const { checkInDate, checkOutDate, numberOfGuests, fullPrice } = req.body;

  Booking.findById(req.params.id)
    .then((booking) => {
      // Update the hotel with new data
      booking.checkInDate = checkInDate;
      booking.checkOutDate = checkOutDate;
      booking.numberOfGuests = numberOfGuests;
      booking.fullPrice = fullPrice;

      // Save new Data
      booking
        .save()
        .then((updatedBooking) => res.status(200).json(updatedBooking))
        .catch((err) => res.status(400).json({ error: err }));
    })
    .catch((err) => res.status(400).json({ error: err }));
};
//Delete booking
const deleteBooking = (req, res, next) => {
  Booking.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).send("Booking deleted successfully"))
    .catch((err) => res.status(400).json({ error: err }));
};

module.exports = {
  getCustomerBookings,
  getHotelBookings,
  getBooking,
  createBooking,
  updateBooking,
  deleteBooking,
};
