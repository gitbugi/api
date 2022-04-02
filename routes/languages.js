const express = require('express');
//const multer = require('multer');
const router = express.Router();
//const upload = multer();              IST NUR FÜR POST REQUEST
const languagesController = require('../controllers/languages');

router.get('/languages', languagesController.getAllLanguages);



module.exports = router;