const mongoose = require("mongoose"); //import mongoose

const TextsSchema = new mongoose.Schema({
    uid: Number,
    categoryname: String,
    language: String,
    title: String,
    text: String,
    //Text Data
    numberofwords: Number,
    yellowvocabels: Number,
    darkyellowvocabels: Number,
    greenvocabels: Number,
    redvocabels: Number,
    lastrepeatat: Number
}, { minimize: false });

const Texts = mongoose.model('Texts', TextsSchema);
module.exports = Texts;