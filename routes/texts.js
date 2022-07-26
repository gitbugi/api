const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer();
const textsController = require('../controllers/texts');
const auth = require("../middleware/auth");


router.get('/texts', auth, textsController.getAllTexts); //+ filtern

router.get('/texts/:title', auth, textsController.getOneText);
router.post('/texts', auth, upload.none(), textsController.newText);
router.delete('/texts/:title', auth, textsController.deleteOneText);
router.patch('/texts/:title', auth, upload.none(), textsController.patchText);

//Text Number of words, vocabels etc...
router.patch('/texts/:title/:numberof', upload.none(), textsController.setNumber)

module.exports = router;