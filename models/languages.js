const mongoose = require("mongoose"); //import mongoose

const LanguagesSchema = new mongoose.Schema({
    uid: Number,
    language: String,
    allyellowvocabels: { type: Number, default: 0 },
    alldarkyellowvocabels: { type: Number, default: 0 },
    allgreenvocabels: { type: Number, default: 0 },
    allredvocabels: { type: Number, default: 0 }
});

const Languages = mongoose.model('Languages', LanguagesSchema);
module.exports = Languages;