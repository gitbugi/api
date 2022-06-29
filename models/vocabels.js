const mongoose = require("mongoose");

const vocabelsSchema = new mongoose.Schema({
    uid: Number,
    language: String,
    yellowvocabels: { type: Object, default: {} },
    darkyellowvocabels: { type: Object, default: {} },
    greenvocabels: { type: Object, default: {} },
    redvocabels: { type: Object, default: {} }
}, { minimize: false });

const Vocabels = mongoose.model('Vocabels', vocabelsSchema);
module.exports = Vocabels;