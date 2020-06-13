var router = require('express').Router()
var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId


//Mongo Url
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost'


router.get('/:id', (req, res, next)=>{

	var id = req.params.id

	MongoClient.connect(MONGO_URI, (error, client)=>{
		if(error){
			res.status(501).json({'msg' : 'Cannot Connect to Database Server '});
		} else {
			var society_db = client.db('buzzcal').collection('society');
			
			society_db.findOne({ _id : new ObjectId(id)}, (err, society)=>{
				if(society == null){
					res.status(401).json({"msg" : "Society doesn't Exist"});
				} else {
					res.status(200).json(society);
				}
			});
		}
	});
});
module.exports = router
