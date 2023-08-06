const express = require('express');
const router = express.Router();
router.use(express.json())
const userController = require('../controller/userController.js');

// show all
router.get('/users', userController.getAllUsers);

module.exports = router