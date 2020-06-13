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
			var society_db = client.db('buzzcal').collection('society')
			var email = req.body.email;
			var name = req.body.name;
			var username = req.body.username;
			var logo_url = req.body.image;
			var passwd = req.body.passwd;

			society_db.findOne({ email: email}, (err, society)=>{
				if(society != null){
					res.status(501).json({"msg" : "Email Already Registered"});
				}else{
					society_db.findOne({ username : username }, (err1, society_1)=>{
						if(society_1 != null){
							res.status(501).json({"msg" : "Username Alredy Used"});
						}else{
							var hashedPasswd = bcrypt.hashSync(passwd, 16);
							var new_user = {
								name : name,
								email : email,
								passwd : hashedPasswd,
								image_url : image_url,
								members : new Array(),
								public_event : new Array(),
								private_event : new Array()
							};

							society_db.insertOne(new_user, (err2, user_2)=>{
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
