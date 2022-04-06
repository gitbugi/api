const express = require('express');
//const multer = require('multer');
const router = express.Router();
//const upload = multer();              IST NUR FÜR POST REQUEST
const languagesController = require('../controllers/languages');
const auth = require("../middleware/auth");

router.get('/languages', auth, languagesController.getAllLanguages);



module.exports = router;