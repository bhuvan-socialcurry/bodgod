const express = require('express')
//const usercontroller =require('../controller')
 
const userc = require('../controller/userc')
 
const router = express.Router()
 
router.get('/register',userc.register)
 
 router.get('/login',function(req,res){
     console.log("this is a game changer")
 })
module.exports = router