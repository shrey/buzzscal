var router = require('express').Router()
var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId


const MONGO_URI = process.env.MONGO_URI | 'mongodb://localhost:8000'


router.post('/', (req, res, next)=>{

	MongoClient.connect(MONGO_URI, (error, client)=>{
	
		if(error){
			res.status(501).json({"msg" : "Cannot Connect to Database Server"});
		} else {

			var event_db = client.db('buzzcal').collection('event')

			var new_event = {
				name : req.body.name,
				society : req.session.name,
				society_id : req.session._id,
				description : req.body.description,
				registered : new Array()
			}

			event_db.insertOne(new_event, (err, event)=>{
				res.status(200).json({"msg" : "Event Created"});
			});
		}
	});
});

module.exports = router;
