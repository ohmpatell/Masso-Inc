const Hotel = require("../model/hotel.model");
const { uploadImageToStorage } = require('./uploadImageToStorage.js');

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
  const creatorUserId = req.user._id;
  Hotel.find({ creatorUserId })
    .then((hotel) => res.status(200).json(hotel))
    .catch((err) => res.status(400).json({ error: err }));
};

//Add hotel with image
const addHotel = async (req, res, next) => {
  const { name, location, phone, email, description, price } = req.body;
  const creatorUserId = req.user._id;

  try {
    const imageUrl = req.file ? await uploadImageToStorage(req.file) : null;

    let hotel = new Hotel({
      name,
      location,
      phone,
      email,
      description,
      price,
      imageUrl: imageUrl,
      creatorUserId,
    });

    const savedHotel = await hotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

//Update hotel
const updateHotel = async (req, res, next) => {
  const { name, location, phone, email, description, price } = req.body;

  try {
      const hotel = await Hotel.findById(req.params.id);

      if (!hotel) {
          return res.status(404).json({ error: 'Hotel not found' });
      }

      // Update the hotel with new data
      hotel.name = name;
      hotel.location = location;
      hotel.phone = phone;
      hotel.email = email;
      hotel.description = description;
      hotel.price = price;

      if (req.files) {
          const imageUrl = await uploadImagesToStorage(req.file);
          hotel.imageUrl = imageUrl;
      }

      const updatedHotel = await hotel.save();
      res.status(200).json(updatedHotel);
  } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
  }
};
//Delete hotel
const deleteHotel = (req, res, next) => {
  Hotel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).send("Hotel deleted successfully"))
    .catch((err) => res.status(400).json({ error: err }));
};

module.exports = {
  getHotels,
  getHotel,
  getCreatedHotels,
  addHotel,
  updateHotel,
  deleteHotel,
};
