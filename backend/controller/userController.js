const mongoose = require('mongoose')
const express = require('express');
const routerGateways = express.Router();
routerGateways.use(express.json());
const User = require('../models/users');
const app = express();


const getAllUsers = (req, res) => {
    User.find({}).then(user => {
        res.status(200).json(user);
        // mongoose.connection.close().then(() => {
        //   console.log('Connection closed')
        // })
    })
};

const getUpdateUsers = (req, res) => {
    const {user} = req.params;
    
};


module.exports = {
    getAllUsers,
    getUpdateUsers
}