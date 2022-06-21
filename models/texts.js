const mongoose = require("mongoose"); //import mongoose

const TextsSchema = new mongoose.Schema({
    uid: Number,
    categoryname: String,
    language: String,
    title: String,
    text: String,
    vocabels: { type: Object, default: {} },
    darkyellowvocabels: { type: Object, default: {} },
    greenvocabels: { type: Object, default: {} },
    redvocabels: { type: Object, default: {} }
}, { minimize: false });

const Texts = mongoose.model('Texts', TextsSchema);
module.exports = Texts;