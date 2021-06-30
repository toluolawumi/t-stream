const mongoose = require('mongoose')
const express = require('express')

require('dotenv').config();
const connectionString = process.env.CONNECTIONSTRING 


module.exports = () => {
    mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify: false
})
.then((result)=> {
    console.log('db connected...')
    })
.catch(err => {
    console.log(err)
})
}