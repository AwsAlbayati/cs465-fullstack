// travel.js in controllers directory
const express = require('express');
const router = express.Router();

// Controller function to handle rendering the travel page
const travelController = function(req, res) {
    res.render('travel', { title: 'Travel' });
};

// Define route for GET request to /travel
router.get('/', travelController);

module.exports = router;