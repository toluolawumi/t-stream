const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create UserSchema
const userSchema = new Schema(
    {
        //define properties
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        }

    }, 
    {
        timestamps: true
    }   
);

const User = mongoose.model('user', userSchema)

module.exports = User;