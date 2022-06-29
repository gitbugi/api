const Vocabels = require('../models/vocabels');

/*
const getAllYellowVocabels = (req, res) => {
    let allVocabels = {};
    let search = {
        language: req.query.language
    };
    //let vocabel = {};

    //if (req.query.language) {
    //    search = {
    //        language: req.query.language
    //    };
    //
    //    Vocabels.find(search, (err, data) => {
    //        if (err) {
    //            return res.json({ Error: err })
    //        }


    //for (i = 0; i < data.length; i++) {
    //if (req.pathname = '/texts/vocabels') {
    //    vocabel = data[i].vocabels;
    //}
    //if (req.pathname = '/texts/darkyellowvocabels') {
    //    vocabel = data[i].darkyellowvocabels;
    //}
    //if (req.pathname = '/texts/greenvocabels') {
    //    vocabel = data[i].greenvocabels;
    //}
    //if (req.pathname = '/texts/redvocabels') {
    //    vocabel = data[i].redvocabels;
    //}
    //allVocabels = Object.assign(allVocabels, data[i].vocabels);
    //};
    //return res.json(data.yellowvocabels);
    //    })
    //} else {
    Vocabels.find({ language: req.params.language }, (err, data) => {
        if (err) {
            return res.json({ Error: err })
        }
        //for (let i = 0; i < data.length; i++) {
        //    allVocabels = Object.assign(allVocabels, data[i].vocabels);
        //};
        return res.json(data);
    })
};

const getAlldarkyellowvocabels = (req, res) => {
    let allVocabels = {};
    let search = {}

    if (req.query.language) {
        search = {
            language: req.query.language
        };

        Vocabels.find(search, (err, data) => {
            if (err) {
                return res.json({ Error: err })
            }
            //for (let i = 0; i < data.length; i++) {
            //    allVocabels = Object.assign(allVocabels, data[i].darkyellowvocabels);
            //};
            return res.json(data);
        })
    } else {
        Vocabels.find({}, (err, data) => {
            if (err) {
                return res.json({ Error: err })
            }
            //for (let i = 0; i < data.length; i++) {
            //    allVocabels = Object.assign(allVocabels, data[i].darkyellowvocabels);
            //};
            return res.json(data);
        })
    }
};

const getAllgreenvocabels = (req, res) => {
    let allVocabels = {};
    let search = {}

    if (req.query.language) {
        search = {
            language: req.query.language
        };

        Vocabels.find(search, (err, data) => {
            if (err) {
                return res.json({ Error: err })
            }
            //for (let i = 0; i < data.length; i++) {
            //    allVocabels = Object.assign(allVocabels, data[i].greenvocabels);
            //};
            return res.json(data);
        })
    } else {
        Vocabels.find({}, (err, data) => {
            if (err) {
                return res.json({ Error: err })
            }
            //for (let i = 0; i < data.length; i++) {
            //    allVocabels = Object.assign(allVocabels, data[i].greenvocabels);
            //};
            return res.json(data);
        })
    }
};

const getAllredvocabels = (req, res) => {
    let allVocabels = {};
    let search = {}

    if (req.query.language) {
        search = {
            language: req.query.language
        };

        Vocabels.find(search, (err, data) => {
            if (err) {
                return res.json({ Error: err })
            }
            //for (let i = 0; i < data.length; i++) {
            //    allVocabels = Object.assign(allVocabels, data[i].redvocabels);
            //};
            return res.json(data);
        })
    } else {
        Vocabels.find({}, (err, data) => {
            if (err) {
                return res.json({ Error: err })
            }
            //for (let i = 0; i < data.length; i++) {
            //    allVocabels = Object.assign(allVocabels, data[i].redvocabels);
            //};
            return res.json(data);
        })
    }
};
*/
const getAllVocabels = (req, res) => {
    Vocabels.find({ language: req.params.language }, (err, data) => {
        if (err) {
            return res.json({ Error: err })
        }
        //for (let i = 0; i < data.length; i++) {
        //    allVocabels = Object.assign(allVocabels, data[i].vocabels);
        //};
        return res.json(data);
    })
}

/*
const getOneVocabels = (req, res) => {
    let title = req.params.title;

    Vocabels.findOne({ title: title }, (err, data) => {
        if (err || !data) {
            return res.json({ message: "Vocabels doesn't exist." });
        } else return res.json(data.vocabels);
    });
};*/

const patchVocabel = (req, res) => {
    //let title = req.params.title;
    let language = req.params.language;
    let vocabel = req.body;

    // title: title   bei vocabel muss vorher { "vocabels": {}} eingegeben werden
    Vocabels.findOneAndUpdate({ language: language }, vocabel, { return: true }, (err, data) => {
        if (data) {
            return res.json(data);
        } else {
            return res.json({ Error: err });
        }
    })
}

module.exports = {
    getAllVocabels,
    patchVocabel
}