// travel.js in controllers directory
var express = require('express');
var router = express.Router();
console.log('')
const controller = require('../controllers/travel');

// Define route for GET request to /travel
router.get('/', controller.travel);

module.exports = router;