const mongoose = require("mongoose"); //import mongoose

const TextsSchema = new mongoose.Schema({
    uid: Number,
    categoryname: String,
    language: String,
    title: String,
    text: String,
    //Text Data
    numberofwords: { type: Number, default: 0 },
    yellowvocabels: { type: Number, default: 0 },
    darkyellowvocabels: { type: Number, default: 0 },
    greenvocabels: { type: Number, default: 0 },
    redvocabels: { type: Number, default: 0 },
    lastrepeatat: { type: Number, default: 0 }
}, { minimize: false });

const Texts = mongoose.model('Texts', TextsSchema);
module.exports = Texts;