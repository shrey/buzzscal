var router = require('express').Router()
var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId
var bcrypt = require('bcryptjs')

//Mongo URI
const MONGO_URI = process.env.MONGO_URI | 'mongodb://localhost'


router.post('/', async (req, res, next)=>{

	if(req.isSocietyLoggedIn == undefined){
		MongoClient.connect(MONGO_URI, (error, client)=>{

			if(error){
				res.status(501).json({"msg" : "Cannot Connect to Database Server"});
			} else {
				var society_db = client.db('buzzcal').collection('society')
				var email = req.body.email
				var passwd = req.body.passwd;

				society_db.findOne({ email : email }, (err, society)=>{
					if(society == null){
						res.status(501).json({"msg" : "Incorrect Email "});
					} else {
						var isValid = bcrypt.compareSync(passwd, user.passwd);
						if(isValid){
							req.session.isSocietyLoggedIn = true;
							req.session.name = society.name;
							req.session._id = society._id.toString();
							res.status(200).json({"msg" : "Logged In"});
						} else {
							res.status(501).json({"msg" : "Incorrect Password"});
						}
					}
				});
			}
		});
	} else {
		res.status(200).json({"msg" : "Logged In"});
	}
});

module.exports = router;
