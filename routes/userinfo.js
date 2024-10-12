const express = require('express');
const UserModel = require('../model/user')

const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
router.get('/', verifyToken,async (req, res) => {
    console.log(req)
    const userid = req.params.id; 
    const user = await UserModel.findOne(userid);
res.status(200).json( { name :user.username  } );
});
module.exports = router;