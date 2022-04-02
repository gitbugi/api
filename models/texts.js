const mongoose = require("mongoose"); //import mongoose

const TextsSchema = new mongoose.Schema({
    uid: Number,
    categoryname: String,
    language: String,
    title: String,
    text: String,
    vocabels: { type: Object, default: {} }
});

const Texts = mongoose.model('Texts', TextsSchema);
module.exports = Texts;