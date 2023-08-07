const express = require('express');
const router = express.Router();
router.use(express.json())
const userController = require('../controller/userController.js');

// show all
router.get('/users', userController.getAllUsers);
router.get('/users/:userName', userController.getUserByUserName);

module.exports = router