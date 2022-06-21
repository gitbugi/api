const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer();
const textsController = require('../controllers/texts');
const auth = require("../middleware/auth");

//Vocabels
router.get('/texts/vocabels', auth, textsController.getAllVocabels); //+ filtern
router.get('/texts/:title/vocabels', auth, textsController.getOneVocabels);

//patch mit darkyellow, green, red alles hierübermachen (v) in Object { "redvocabels": {} } eingeben
router.patch('/texts/:title/vocabels', auth, upload.none(), textsController.patchVocabel);

router.get('/texts/darkyellowvocabels', auth, textsController.getAlldarkyellowvocabels); //+ filtern
router.get('/texts/greenvocabels', auth, textsController.getAllgreenvocabels); //+ filtern
router.get('/texts/redvocabels', auth, textsController.getAllredvocabels); //+ filtern

router.patch('/texts/:title/darkyellowvocabels', auth, upload.none(), textsController.patchVocabel)
router.patch('/texts/:title/greenvocabels', auth, upload.none(), textsController.patchVocabel)
router.patch('/texts/:title/redvocabels', auth, upload.none(), textsController.patchVocabel)

//Text
router.get('/texts', auth, textsController.getAllTexts); //+ filtern

router.get('/texts/:title', auth, textsController.getOneText);
router.post('/texts', auth, upload.none(), textsController.newText);
router.delete('/texts/:title', auth, textsController.deleteOneText);
router.patch('/texts/:title', auth, upload.none(), textsController.patchText);





module.exports = router;