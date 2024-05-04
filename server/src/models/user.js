const mongoose = require('mongoose');
const Joi = require('joi');
const { string } = require('joi');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2450
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: 1,
        maxlength: 50
    }

})
const User = mongoose.model('User', userSchema );

function validateUser(user){
    console.log(user)
    const schema = Joi.object({
       name: Joi.string().min(3).max(50).required(),
       password: Joi.string().min(3).max(250).required(),
       email: Joi.string().min(3).required().email()
    });
    return schema.validate(user);

}

exports.User = User;
exports.userSchema = userSchema
exports.validateUser = validateUser;