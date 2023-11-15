const express = require('express');
const hotelRouter = express.Router();
const Hotel = require('../model/hotel.model');

hotelRouter.route('/hotel').get((req, res, next) =>
{
    Hotel.find().then(object => res.status(200).json(object))
        .catch(err => res.status(400).json({ "error": err }))
});

hotelRouter.route('/hotel/:id').get((req, res, next) =>
{
    Hotel.findById(req.params.id).then(object => res.status(200).json(object))
        .catch(err => res.status(400).json({ "error": err }))
});

hotelRouter.route('/hotel/add').post((req, res, next) =>
{
    let hotel = new Hotel(req.body)
    hotel.save()
        .then(object => res.status(200).json(object))
        .catch(err => res.status(400).json({ "error": err }))
});

hotelRouter.route('/hotel/update/:id').post((req, res, next) =>
{
    Hotel.findById(req.params.id)
        .then(object =>
        {
            //Update the object with new data
            object.name = req.body.name;
            object.location = req.body.location;
            object.phone = req.body.phone;
            object.email = req.body.email;
            object.description = req.body.description;
            object.numberOfRooms = req.body.numberOfRooms;        
            //Save new Data

            object.save()
                .then(object => res.status(200).json(object))
                .catch(err => res.status(400).json({ "error": err }))            
        })
        .catch(err => res.status(400).json({ "error": err }))
});

hotelRouter.route('/hotel/delete/:id').delete((req, res, next) =>
{
    Hotel.findByIdAndDelete(req.params.id)
        .then(object => res.status(200).send("Registry deleted successfully"))
        .catch(err => res.status(400).json({ "error": err }))
});

module.exports = hotelRouter;