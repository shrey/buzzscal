var router = require('express').Router()
var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId

//Mongo URI
const MONGO_URI = process.env.MONGO_URI | 'mongodb://localhost:5000'

router.post('/', async(req, res, next)=>{
	
	await MongoClient.connect(MONGO_URI, (error, client)=>{
	
		if(error)
			res.status(501).json({"msg" : "Cannot Connect to Database Server"});
		else{
			var user_db = client.db('buzzcal').collection('user')
			var email = req.body.email;
			var name = req.body.name;
			var usernam = req.body.username;
			var image_url = req.body.image;
			var mobile = req.body.number;
			var passwd = req.body.passwd;

			await user_db.findOne({ email: email}, (err, user)=>{
				if(user != null){
					res.status(501).json({"msg" : "Email Already Registered"});
				}else{
					await user_db.findOne({ username : username }, (err1, user_1)=>{
						if(user_1 != null){
							res.status(501).json({"msg" : "Username Alredy Used"});
						}else{
							var new_user = {
								name : name,
								email : email, 
								passwd : passwd,
								image_url : image_url,
								mobile : mobile,
								number : number
							};

							await user_db.insertOne(new_user, (err2, user_2)=>{
								if(err2){
									res.status(501).json({"msg" : "Internal Server Error \n Try Again Later"});
								} else {
									res.status(200).json({"msg" : "User Registered"});
								}
							});
					});
				}
			})
		}
	});
});

module.exports = router;
