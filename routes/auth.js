const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserCcontroller=require('../controllers/UserController');
// User registration
router.post('/register',UserCcontroller.register);
    // User login
router.post('/login', UserCcontroller.login );
 module.exports = router;