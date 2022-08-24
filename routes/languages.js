const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer(); //Ist für post request
const languagesController = require('../controllers/languages');
const auth = require("../middleware/auth");

router.get('/languages', auth, languagesController.getAllLanguages);
router.post('/languages/:language', auth, upload.none(), languagesController.setnumofvocabels);



module.exports = router;