const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, default: null },
    password: { type: String },
    token: { type: String },
});

const User = mongoose.model('user', userSchema);
module.exports = User;