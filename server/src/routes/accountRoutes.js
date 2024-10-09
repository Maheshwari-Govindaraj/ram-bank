const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const upload = require('../middleware/multer');

router.post('/create', upload.single('document'), accountController.createAccount);

module.exports = router;
