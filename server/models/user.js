const mongoose = require('mongoose')
const { hashPassword } = require('../hash.js');

const userschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

// Hash password before saving user
userschema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); // Skip if password isn't modified
    this.password = await hashPassword(this.password);
    next();
});

const User = mongoose.model('User', userschema);
module.exports = User;