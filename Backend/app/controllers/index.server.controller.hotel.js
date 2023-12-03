const Hotel = require("../model/hotel.model");

const getHotels = (req, res, next) => {
  Hotel.find()
    .then((hotels) => res.status(200).json(hotels))
    .catch((err) => res.status(400).json({ error: err }));
};

const getHotel = (req, res, next) => {
  Hotel.findById(req.params.id)
    .then((hotel) => res.status(200).json(hotel))
    .catch((err) => res.status(400).json({ error: err }));
};

const addHotel = (req, res, next) => {
  const { name, location, phone, email, description, numberOfRooms } = req.body;

  let hotel = new Hotel({
    name,
    location,
    phone,
    email,
    description,
    numberOfRooms,
    // Check if a file is uploaded
    image: req.file ? req.file.buffer : undefined,
  });

  hotel
    .save()
    .then((savedHotel) => res.status(200).json(savedHotel))
    .catch((err) => res.status(400).json({ error: err }));
};

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

const deleteHotel = (req, res, next) => {
  Hotel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).send("Hotel deleted successfully"))
    .catch((err) => res.status(400).json({ error: err }));
};

module.exports = { getHotels, getHotel, addHotel, updateHotel, deleteHotel };
