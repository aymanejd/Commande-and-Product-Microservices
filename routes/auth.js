const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserCcontroller=require('../controllers/UserController');
router.post('/register',UserCcontroller.register);
router.post('/login', UserCcontroller.login );
 module.exports = router;