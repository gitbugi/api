const Languages = require('../models/languages');

const getAllLanguages = (req, res) => {
    Languages.find({}, (err, data) => {
        if (err) {
            return res.json({ Error: err })
        }
        return res.json(data)
    })
}

const setnumofvocabels = (req, res) => {
    let language = req.params.language;
    let vocabel = req.body;

    Languages.findOneAndUpdate({ language: language }, vocabel, { return: true }, (err, data) => {
        if (err) {
            return res.json({ Error: err })
        }
        return res.json(data)
    })
}

module.exports = {
    getAllLanguages,
    setnumofvocabels
}