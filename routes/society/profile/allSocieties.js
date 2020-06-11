var router = require('express').Router()
var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId


//Mongo Url
const MONGO_URI = process.env.MONGO_URI | 'mongodb://localhost:8000'


router.get('/', (req, res, next)=>{

	MongoClient.connect(MONGO_URI, (error, client)=>{
		if(error){
			res.status(501).json({'msg' : 'Cannot Connect to Database Server '});
		} else {
			var society_db = client.db('buzzcal').collection('society');

			society_db.find().toArray((err, society)=>{
				res.status(200).json(society);

			});
		}
	});
});
module.exports = router
