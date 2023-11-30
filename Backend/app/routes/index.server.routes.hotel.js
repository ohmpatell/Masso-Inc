const express = require("express");
const {
  getHotels,
  getHotel,
  deleteHotel,
  addHotel,
  updateHotel
} = require("../controllers/index.server.controller.hotel");

const multer = require("multer");
const hotelRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Get all hotels
hotelRouter.route("/hotel").get(getHotels);
//Get hotel by ID
hotelRouter.route("/hotel/:id").get(getHotel);
//Add hotel with image
hotelRouter.route("/hotel/add").post(upload.single("image"), addHotel);
//Update hotel
hotelRouter
  .route("/hotel/update/:id")
  .post(upload.single("image"), updateHotel);
//Delete hotel
hotelRouter.route("/hotel/delete/:id").delete(deleteHotel);

module.exports = hotelRouter;
