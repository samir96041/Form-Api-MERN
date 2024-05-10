// routes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controller/usercontroller');

router.post('/register', UserController.registerUser);
router.get('/users', UserController.getAllUsers);

module.exports = router;
