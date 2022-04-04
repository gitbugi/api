const Texts = require('../models/texts');

//Text
const getAllTexts = (req, res) => {
    //Filter
    if (req.query.language) {
        Texts.find({ language: req.query.language }, (err, data) => {
            if (err) {
                return res.json({ Error: err })
            }
            return res.json(data)
        });
    } else if (req.query.categoryname) {
        Texts.find({ categoryname: req.query.categoryname }, (err, data) => {
            if (err) {
                return res.json({ Error: err })
            }
            return res.json(data)
        });
    }
    //get All
    else {
        Texts.find({}, (err, data) => {
            if (err) {
                return res.json({ Error: err })
            }
            return res.json(data)
        })
    }
}

const getOneText = (req, res) => {
    let title = req.params.title;

    Texts.findOne({ title: title }, (err, data) => {
        if (err || !data) {
            return res.json({ message: "Title doesn't exist." });
        } else return res.json(data);
    });
};

const newText = (req, res) => {
    Texts.findOne({ name: req.body.name }, (err, data) => {
        if (data) {
            //create a new tea object using the Tea model and req.body
            const newText = new Texts({
                categoryname: req.body.categoryname,
                language: req.body.language,
                title: req.body.title,
                text: req.body.text,
                vocabels: { "": "" }
            })
            newText.save((err, data) => {
                if (err) return res.json({ Error: err });
                return res.json(data);
            })
        } else {
            if (err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({ message: "text already exists" });
        }
    })
};

const deleteOneText = (req, res) => {
    let title = req.params.title;

    Texts.deleteOne({ title: title }, (err, data) => {
        //if there's nothing to delete return a message
        if (data.deletedCount == 0) return res.json({ message: "Title doesn't exist." });
        //else if there's an error, return the err message
        else if (err) return res.json(`Something went wrong, please try again. ${err}`);
        //else, return the success message
        else return res.json({ message: "Title deleted." });
    });
};

const patchText = (req, res) => {
    let title = req.params.title;

    const newData = {
        categoryname: req.body.categoryname,
        language: req.body.language,
        title: req.body.title,
        text: req.body.text
    }

    Texts.findOneAndUpdate({ title: title }, newData, { return: true }, (err, data) => {
        if (data) {
            return res.json(newData);
        } else {
            return res.json({ Error: err });
        }
    })
}

//Vocabels
const getAllVocabels = (req, res) => {
    let allVocabels = {};

    Texts.find({}, (err, data) => {
        if (err) {
            return res.json({ Error: err })
        }
        for (let i = 0; i < data.length; i++) {
            allVocabels = Object.assign(allVocabels, data[i].vocabels);
        };
        return res.json(allVocabels);
    })
};

const getOneVocabels = (req, res) => {
    let title = req.params.title;

    Texts.findOne({ title: title }, (err, data) => {
        if (err || !data) {
            return res.json({ message: "Vocabels doesn't exist." });
        } else return res.json(data.vocabels);
    });
};

const patchVocabel = (req, res) => {
    let title = req.params.title;
    let vocabel = req.body;
    // {
    //    "vocabels": {
    //        "one": "one",
    //        "two": "two"
    //    }
    //}
    //req.body.vocabels;

    Texts.findOneAndUpdate({ title: title }, vocabel, { return: true }, (err, data) => {
        if (data) {
            return res.json(vocabel);
        } else {
            return res.json({ Error: err });
        }
    })
}



module.exports = {
    getAllTexts,
    newText,
    getOneText,
    deleteOneText,
    patchText,
    getAllVocabels,
    getOneVocabels,
    patchVocabel
}