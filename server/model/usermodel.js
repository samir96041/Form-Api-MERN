const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String },
    mobile: { type: String },
    address: { type: String },
    email: { type: String },
    // profileImage: { type: String },
    dob: { type: String }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
