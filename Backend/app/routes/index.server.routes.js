const express = require('express');
const multer = require('multer');
const hotelRouter = express.Router();
const Hotel = require('../model/hotel.model');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Get all hotels
hotelRouter.route('/hotel').get((req, res, next) => {
    Hotel.find()
        .then(hotels => res.status(200).json(hotels))
        .catch(err => res.status(400).json({ "error": err }));
});

// Get a hotel by ID
hotelRouter.route('/hotel/:id').get((req, res, next) => {
    Hotel.findById(req.params.id)
        .then(hotel => res.status(200).json(hotel))
        .catch(err => res.status(400).json({ "error": err }));
});

// Add a new hotel with image upload
hotelRouter.route('/hotel/add').post(upload.single('image'), (req, res, next) => {
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

    hotel.save()
        .then(savedHotel => res.status(200).json(savedHotel))
        .catch(err => res.status(400).json({ "error": err }));
});

// Update a hotel by ID with image upload
hotelRouter.route('/hotel/update/:id').post(upload.single('image'), (req, res, next) => {
    const { name, location, phone, email, description, numberOfRooms } = req.body;

    Hotel.findById(req.params.id)
        .then(hotel => {
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
            hotel.save()
                .then(updatedHotel => res.status(200).json(updatedHotel))
                .catch(err => res.status(400).json({ "error": err }));
        })
        .catch(err => res.status(400).json({ "error": err }));
});

// Delete a hotel by ID
hotelRouter.route('/hotel/delete/:id').delete((req, res, next) => {
    Hotel.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).send("Hotel deleted successfully"))
        .catch(err => res.status(400).json({ "error": err }));
});

module.exports = hotelRouter;
