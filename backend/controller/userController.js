const mongoose = require('mongoose')
const express = require('express');
const routerGateways = express.Router();
routerGateways.use(express.json());
const User = require('../models/users');
const app = express();


const getAllUsers = (req, res) => {
    User.find({}).then(user => {
        res.status(200).json(user);
    })
   // mongoose.connection.close
}

const getUpdateUsers = (req, res) => {
    // const {user} = req.params;
    // const {newUser} = req.params;
    // User.find((user) => {

    // })
    // user = newUser
    // mongoose.connection.close
};

const getUserByUserName = (req, res) => {
    const {userName} = req.params;
   User.find({user:userName})
   .then(user => {
        if(user.length>0){
             res.status(200).json(user)
        }else{
            res.status(404).json({ error: 'User not found' })
        }
    })
    .catch(err => {
        res.status(400).json(err)
    })
}

const addUser = (req, res) => {{
    
    
    
    // const data = new User({
    //     user: 'Claudia',
    //     pass: 'marAzul'
    // })
    // const data2 = new User({
    //     user: 'Alejandra',
    //     pass: 'free'
    // })
    
    // data.save()
    // .then(result => {
    //     console.log(result)
    //     mongoose.connection.close()
    // })
    // .catch(err => {
    //     console.log(err)
    // })
    
    // data2.save()
    // .then(result => {
    //     console.log(result)
    //     mongoose.connection.close()
    // })
    // .catch(err => {
    //     console.log(err)
    // })
}}

module.exports = {
    getAllUsers,
    getUpdateUsers,
    getUserByUserName
}