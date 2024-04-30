const express = require('express');
const { check, validationResult } = require('express-validator');
const Trip = require('../models/trips');
const auth = require("../middleware/authMiddleware")

const router = express.Router();

// Create a new trip
router.post(
    '/my-trips',
    auth.authUser,
    [
        check('name').isString().withMessage('Name must be a string').notEmpty().withMessage('Name is required'),
        check('status').isString().withMessage('Status must be a string').notEmpty().withMessage('Status is required'),
        check('date').isString().withMessage('Invalid date format').notEmpty().withMessage('Date is required'),
        check('location').isString().withMessage('Location must be a string').notEmpty().withMessage('Location is required'),
        check('price').isString().withMessage('Price must be a string').notEmpty().withMessage('Price is required'),
    ],
    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Extract trip data from request body
        const { name, status, date, location, price } = req.body;

        try {
            const newTrip = new Trip({ user: req.user.id, name, status, date, location, price });

            // Save the new trip to the database
            await newTrip.save();

            // Return the new trip in the response
            return res.status(201).json(newTrip);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
);

// Get all trips
router.get('/my-trips', auth.authUser, async (req, res) => {
    try {
        const trips = await Trip.find({ user: req.user.id }).sort({ date: -1 });
        return res.status(200).json(trips);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a trip by ID
router.put('/my-trips/:id', auth.authUser, async (req, res) => {
    const tripId = req.params.id;
    const { name, status, date, location, price } = req.body;

    try {
        const updatedTrip = await Trip.findByIdAndUpdate(
            tripId,
            { name, status, date, location, price, user: req.user.id },
            { new: true, runValidators: true }
        );

        if (!updatedTrip) {
            return res.status(404).json({ error: 'Trip not found' });
        }

        return res.status(200).json(updatedTrip);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a trip by ID
router.delete('/my-trips/:id', auth.authUser, async (req, res) => {
    const tripId = req.params.id;

    try {
        const deletedTrip = await Trip.findByIdAndDelete(tripId);

        if (!deletedTrip) {
            return res.status(404).json({ error: 'Trip not found' });
        }

        return res.status(204).send();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
