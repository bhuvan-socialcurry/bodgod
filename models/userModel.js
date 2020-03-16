var mongoose = require('mongoose')

const UserSchema  = new mongoose.Schema({
    first_name: {
     type:String,
     required:true
	},
    last_name:{
     type:String,
     required:true,
	},
    password:{
     type:String,
     required:true
	},
    phone_no:{
     type:String,
     required:true
	},
    email:{
     type:String,
     required:true
	},
    refferal_no:{
    type:String
	}
      //preferance


})

const User = mongoose.model('User', UserSchema)

module.exports = User;