const mongoose = require("mongoose"); //import mongoose

const LanguagesSchema = new mongoose.Schema({
    uid: Number,
    language: String,
    knownwords: Array,
});

const Languages = mongoose.model('Languages', LanguagesSchema);
module.exports = Languages;