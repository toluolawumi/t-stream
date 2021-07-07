const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const secret = process.env.SECRET || SECRET;
const expiry = Number(process.env.EXPIRY);

exports.registerNewUser = (req, res) =>{

}

exports.loginUser = (req, res) =>{
    
}