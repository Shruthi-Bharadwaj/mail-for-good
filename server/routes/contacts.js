const express = require('express');
const bodyParser = require('body-parser');

const createContact = require('../controllers/contacts/create-contact');
const createTags = require('../controllers/tags/create-tags');
const { apiIsAuth } = require('./middleware/auth');

const router = express.Router();
const parseJSON = bodyParser.json();

router.use(parseJSON);

router.post('/', createContact, createTags);

module.exports = router;


