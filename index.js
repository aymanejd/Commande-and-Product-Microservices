const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const inforoute = require('./routes/userinfo');

const protectedRoute = require('./routes/protectedRoute');
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/login_db", {
useNewUrlParser: true,
}).then(() => {
console.log("Databse Connected Successfully!!");
}).catch(err => {
console.log('Could not connect to the database', err);
process.exit();
});
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/protected', protectedRoute);
app.use('/userinfo', inforoute);

const PORT = process.env.PORT || 3000;
app.listen(82, () => {
console.log(`Server is running on port 82`);
});
app.get('/',(req,res)=>{
res.json({
"message":"it's work"
})
})