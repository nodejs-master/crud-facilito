const express = require('express');
const RegistrationsController = require('../controllers/registrations');

let router = express.Router();

router.get('/signup', RegistrationsController.new);

router.post('/users', RegistrationsController.create);

module.exports = router;