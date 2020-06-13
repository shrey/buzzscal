var router = require('express').Router()
var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId
var bcrypt = require('bcryptjs')

//Mongo URI
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost'

router.post('/', async(req, res, next)=>{

	await MongoClient.connect(MONGO_URI, (error, client)=>{

		if(error){
			res.status(501).json({"msg" : "Cannot Connect to Database Server"});
		}
		else{
			var user_db = client.db('buzzcal').collection('user')
			var email = req.body.email;
			var name = req.body.name;
			var username = req.body.username;
			var image_url = req.body.image_url;
			var mobile = req.body.number;
			var passwd = req.body.passwd;
			var enrollmentNumber = req.body.enrollmentNumber;
			var description = req.body.description;

			user_db.findOne({ email: email}, (err, user)=>{
				if(user != null){
					res.status(501).json({"msg" : "Email Already Registered"});
				}else{
					user_db.findOne({ username : username }, (err1, user_1)=>{
						if(user_1 != null){
							res.status(501).json({"msg" : "Username Alredy Used"});
						}else{
							var hashedPasswd = bcrypt.hashSync(passwd, 16);
							var new_user = {
								name : name,
								email : email,
								passwd : hashedPasswd,
								image_url : image_url,
								username : username,
								mobile : mobile,
								enrollmentNumber: enrollmentNumber,
								society : new Array(),
								description : description,
								registered_event : new Array()
							};

							user_db.insertOne(new_user, (err2, user_2)=>{
								if(err2){
									res.status(501).json({"msg" : "Internal Server Error \n Try Again Later"});
								} else {
									res.status(200).json({"msg" : "User Registered"});
								}
							});
						}
					});
				}
			});
		}
	});
});

module.exports = router;
