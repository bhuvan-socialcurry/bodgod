var User =require("../models/userModel")
const bycrpypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.register =function(req,res)
{	
	
	 User.findOne({ email: req.body.email }).then(returnedStuff => {
        if (returnedStuff) {
            return res.status(400).json({ success: "false", message: "email already exist" });

        }
		else{
		
        const newUser = new User({
        first_name: req.body.first_name,
        last_name:req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        referal_no:req.body.referal_no,
        phone_no:req.body.phone_no

        });

    bycrpypt.genSalt(10, (err, salt) => {
        bycrpypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;
            newUser.save()
                .then(user => res.
                    json(user))
                .catch(err => console.log(err));

        });
    });
		}
    });

	console.log("this is here to register")

	
} 

exports.login = function(req,res){
    console.log("this is my luck ")
    const email = req.body.email;
    const passwd = req.body.password;

    User.findOne({ email: email }).then(user => {
        if (!user) {
            return res.status(404).json({ success: false, message: "email not found" });
        }

        bycrpypt.compare(passwd, user.password).then(isMatched => {
            if (isMatched) {
                const payload = { id: user.id, name: user.name };

                jwt.sign(payload, "top_secret", 
                    (err, token) => {
                        if (token) {
                            res.json({ success: true, token: token, message: "login successful" });
                        } else {
                            res.json({ success: false, token: err, message: "login failded" });
                        }
                    });
            } else {
                return res.status(400).json({ success: false, message: "password doesent matched" });
            }
        });
    });

}