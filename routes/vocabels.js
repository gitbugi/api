const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer();
const vocabelsController = require('../controllers/vocabels');
const auth = require("../middleware/auth");

//router.get('/texts/:title/vocabels', auth, textsController.getOneVocabels);
router.get('/vocabels/:language', auth, vocabelsController.getAllVocabels); //+ filtern
/*
router.get('/darkyellowvocabels/:language', auth, vocabelsController.getAllVocabels); //+ filtern
router.get('/greenvocabels/:language', auth, vocabelsController.getAllVocabels); //+ filtern
router.get('/redvocabels/:language', auth, vocabelsController.getAllVocabels); //+ filtern
*/

//patch mit darkyellow, green, red alles hierübermachen (v) in Object { "redvocabels": {} } eingeben
router.patch('/vocabels/:language', auth, upload.none(), vocabelsController.patchVocabel);
/*
router.patch('/darkyellowvocabels/:language', auth, upload.none(), vocabelsController.patchVocabel)
router.patch('/greenvocabels/:language', auth, upload.none(), vocabelsController.patchVocabel)
router.patch('/redvocabels/:language', auth, upload.none(), vocabelsController.patchVocabel)
*/
module.exports = router;