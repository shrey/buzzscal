var router = require('express').Router()
var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId


//Mongo Url
const MONGO_URI = process.env.MONGO_URI | 'mongodb://localhost:8000'


router.post('/', (req, res, next)=>{

	MongoClient.connect(MONGO_URI, (error, client)=>{
		if(error){
			res.status(501).json({'msg' : 'Cannot Connect to Database Server '});
		} else {
		
		}
	});
});
module.exports = router
