const express = require('express');
const fileParserController = require('../controllers/fileParse-ctrl');
const router = express.Router();
     
router.post('/fileParse', fileParserController.fileParse);
router.get('/loadParsedData', fileParserController.loadParsedData);

module.exports = router