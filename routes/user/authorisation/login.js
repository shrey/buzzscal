var router = require('express').Router()
var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId
var bcrypt = require('bcryptjs')

//Mongo URI
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost'


router.post('/', async (req, res, next)=>{


	MongoClient.connect(MONGO_URI, (error, client)=>{

		if(error){
			res.status(501).json({"msg" : "Cannot Connect to Database Server"});
		} else {
			var user_db = client.db('buzzcal').collection('user')
			var username = req.body.username
			var passwd = req.body.passwd;

			user_db.findOne({ username : username }, (err, user)=>{
				if(user == null){
					res.status(501).json({"msg" : "Incorrect Username "});
				} else {
					var isValid = bcrypt.compareSync(passwd, user.passwd);
					if(isValid){
						req.session.isLoggedIn = true;
						req.session.name = user.name;
						req.session._id = user._id.toString();
						res.status(200).json(user);
					} else {
						res.status(501).json({"msg" : "Incorrect Password"});
					}
				}
			});
		}
	});
});

module.exports = router;
