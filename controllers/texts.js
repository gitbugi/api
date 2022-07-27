const Texts = require('../models/texts');

const getAllTexts = (req, res) => {
    let search = {}
        //Filter
    if (req.query.language && req.query.categoryname) {
        search = {
            language: req.query.language,
            categoryname: req.query.categoryname
        }
    } else if (req.query.language && !req.query.categoryname) {
        search = {
            language: req.query.language
        }
    } else if (req.query.categoryname && !req.query.language) {
        search = {
            categoryname: req.query.categoryname
        }
    }
    //get All
    else {
        search = {}
    }
    Texts.find(search, (err, data) => {
        if (err) {
            return res.json({ Error: err })
        }
        return res.json(data)
    })
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
                text: req.body.text
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

// Text Numbers of word, vocabels etc...
const setNumber = (req, res) => {
    let title = req.params.title;
    let numberof = req.params.numberof;

    const newData = {
        [numberof]: req.body.number
            //numberofwords: req.body.numberofwords,
            //yellowvocabels: req.body.yellowvocabels,
            //darkyellowvocabels: req.body.darkyellowvocabels,
            //greenvocabels: req.body.greenvocabels,
            //redvocabels: req.body.redvocabels,
            //lastrepeatat: req.body.lastrepeatat
    }

    Texts.findOneAndUpdate({ title: title }, newData, { return: true }, (err, data) => {
        if (data) {
            return res.json(newData);
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
    setNumber
}