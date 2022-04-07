const Languages = require('../models/languages');

const getAllLanguages = (req, res) => {
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