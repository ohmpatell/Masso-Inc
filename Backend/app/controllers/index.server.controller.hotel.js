const Hotel = require("../model/hotel.model");

// Get all hotels
const getHotels = (req, res, next) => {
  Hotel.find()
    .then((hotels) => res.status(200).json(hotels))
    .catch((err) => res.status(400).json({ error: err }));
};
//Get hotel by ID
const getHotel = (req, res, next) => {
  Hotel.findById(req.params.id)
    .then((hotel) => res.status(200).json(hotel))
    .catch((err) => res.status(400).json({ error: err }));
};
// Get created hotels (Hotel owners account)
const getCreatedHotels = (req, res, next) => {
  // console.log(req);
  const userId=req.user._id;
  Hotel.find({userId})
    .then((hotel) => res.status(200).json(hotel))
    .catch((err) => res.status(400).json({ error: err }));
};

//Add hotel with image
const addHotel = (req, res, next) => {
  const { name, location, phone, email, description, numberOfRooms } = req.body;
  const userId = req.user._id;

  let hotel = new Hotel({
    name,
    location,
    phone,
    email,
    description,
    numberOfRooms,
    // Check if a file is uploaded
    image: req.file ? req.file.buffer : undefined,
    userId
  });

  hotel
    .save()
    .then((savedHotel) => res.status(200).json(savedHotel))
    .catch((err) => res.status(400).json({ error: err }));
};

//Update hotel
const updateHotel = (req, res, next) => {
  const { name, location, phone, email, description, numberOfRooms } = req.body;

  Hotel.findById(req.params.id)
    .then((hotel) => {
      // Update the hotel with new data
      hotel.name = name;
      hotel.location = location;
      hotel.phone = phone;
      hotel.email = email;
      hotel.description = description;
      hotel.numberOfRooms = numberOfRooms;

      // Check if a file is uploaded
      if (req.file) {
        hotel.image = req.file.buffer; // Save the image as a Buffer
      }

      // Save new Data
      hotel
        .save()
        .then((updatedHotel) => res.status(200).json(updatedHotel))
        .catch((err) => res.status(400).json({ error: err }));
    })
    .catch((err) => res.status(400).json({ error: err }));
};
//Delete hotel
const deleteHotel = (req, res, next) => {
  Hotel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).send("Hotel deleted successfully"))
    .catch((err) => res.status(400).json({ error: err }));
};

module.exports = { getHotels, getHotel,getCreatedHotels, addHotel, updateHotel, deleteHotel };
