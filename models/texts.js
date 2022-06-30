const mongoose = require("mongoose"); //import mongoose

const TextsSchema = new mongoose.Schema({
    uid: Number,
    categoryname: String,
    language: String,
    title: String,
    text: String
}, { minimize: false });

const Texts = mongoose.model('Texts', TextsSchema);
module.exports = Texts;