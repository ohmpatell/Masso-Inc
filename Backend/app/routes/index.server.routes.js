const express = require('express');
const hotelRouter = express.Router();
const Hotel = require('../model/hotel.model');

hotelRouter.route('/').get((req, res, next) =>
{
    Hotel.find().then(object => res.status(200).json(object))
        .catch(err => res.status(400).json({ "error": err }))
});

hotelRouter.route('/:id').get((req, res, next) =>
{
    Hotel.findById(req.params.id).then(object => res.status(200).json(object))
        .catch(err => res.status(400).json({ "error": err }))
});

hotelRouter.route('/add').post((req, res, next) =>
{
    let hotel = new Hotel(req.body)
    hotel.save()
        .then(object => res.status(200).json(object))
        .catch(err => res.status(400).json({ "error": err }))
});

hotelRouter.route('/update/:id').post((req, res, next) =>
{
    Hotel.findById(req.params.id)
        .then(object =>
        {
            //Update the object with new data
            object.firstName = req.body.firstName;
            object.lastName = req.body.lastName;
            object.phone = req.body.phone;
            object.email = req.body.email;
            object.semester = req.body.semester;
            object.yearOfGraduation = req.body.yearOfGraduation;
            object.currentSubjects = req.body.currentSubjects;
            object.grades = req.body.grades;

            //Save new Data

            object.save()
                .then(object => res.status(200).json(object))
                .catch(err => res.status(400).json({ "error": err }))            
        })
        .catch(err => res.status(400).json({ "error": err }))
});

hotelRouter.route('/delete/:id').delete((req, res, next) =>
{
    Hotel.findByIdAndDelete(req.params.id)
        .then(object => res.status(200).send("Registry deleted successfully"))
        .catch(err => res.status(400).json({ "error": err }))
});

module.exports = hotelRouter;