const express = require("express");
const {
  getCustomerBookings,
  getHotelBookings,
  getBooking,
  createBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/index.server.controller.booking");

const requireAuth = require("../middleware/requireAuth");
const bookingRouter = express.Router();

//Require auth for all the booking edition operations routes
bookingRouter.use(requireAuth);
// Get all bookings by customer
bookingRouter.route("/getCustomerBookings").get(getCustomerBookings);
// Get all bookings by hotel
bookingRouter.route("/getHotelBookings/:id").get(getHotelBookings);
//Get hotel by ID
bookingRouter.route("/getBooking/:id").get(getBooking);
//Add hotel with image
bookingRouter.route("/create").post(createBooking);
//Update hotel
bookingRouter.route("/update/:id").post(updateBooking);
//Delete hotel
bookingRouter.route("/delete/:id").delete(deleteBooking);

module.exports = bookingRouter;
