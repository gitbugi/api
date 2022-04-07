const Languages = require('../models/languages');

const getAllLanguages = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    Languages.find({}, (err, data) => {
        if (err) {
            return res.json({ Error: err })
        }
        return res.json(data)
    })
}

module.exports = {
    getAllLanguages
}