// JavaScript source code
const express = require('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const user = require('./routes/user');
const index =require('./models')
const passport = require('passport');
const auth =require('./config/auth.js')
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 
app.get('/', (req, res) => res.send('App is working'))
 
app.use('/api/',passport.authenticate('jwt', { session : false }), user)
 
app.listen(3000, () => console.log('Example app listening on port 3000!'))
 

