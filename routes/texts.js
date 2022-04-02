const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer();
const textsController = require('../controllers/texts');

//Vocabels
router.get('/texts/vocabels', textsController.getAllVocabels);
router.get('/texts/:title/vocabels', textsController.getOneVocabels);
router.patch('/texts/:title/vocabels', upload.none(), textsController.patchVocabel);

//Text
router.get('/texts', textsController.getAllTexts);

router.get('/texts/:title', textsController.getOneText);
router.post('/texts', upload.none(), textsController.newText);
router.delete('/texts/:title', textsController.deleteOneText);
router.patch('/texts/:title', upload.none(), textsController.patchText);





module.exports = router;