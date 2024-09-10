const express = require('express');
const router = express.Router();
const formateurController = require('../controllers/formateurController');

router.get('/', formateurController.getAllFormateurs);

router.get('/home', (req, res) => {
    res.render('formateur/formateur');  
});

router.post('/create', formateurController.createFormateur);

router.put('/update/:id', formateurController.updateFormateur);

router.put('/delete/:id', formateurController.deleteFormateur);

module.exports = router;