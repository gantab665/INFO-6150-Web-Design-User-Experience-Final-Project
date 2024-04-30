const Review = require('../models/review');
const express = require("express"); // Import the Review model
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { check, validationResult } = require('express-validator');
// Post a review
router.post(
    '/trip-reviews',
    auth.authUser,
    [
        check('tripId').isString().withMessage('Trip ID must be a string').notEmpty().withMessage('Trip ID is required'),
        check('review').isString().withMessage('Review must be a string').notEmpty().withMessage('Review text is required'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { tripId, review,...details } = req.body;

        try {
            const newReview = new Review({
                user: req.user.id,
                trip: tripId,
                reviewText: review,
                ...details
            });

            await newReview.save();
            return res.status(201).json(newReview);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
);
// Get the latest three reviews
router.get('/latest-reviews', async (req, res) => {
    try {
        // Fetch the latest 3 reviews
        const latestReviews = await Review.find().sort({ createdAt: -1 }).limit(3).populate('trip');
        return res.status(200).json(latestReviews);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
