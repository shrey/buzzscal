var router = require('express').Router()
var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId


const MONGO_URI = process.env.MONGO_URI | 'mongodb://localhost'


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
				registered_user : new Array(),
				location : req.body.location,
				isPublic : req.body.isPublic,
				comment : new Array(),
				date : new Date()
			}

			if(req.body.image_url != undefined){
				new_event.image_url = req.body.image_url
			}

			event_db.insertOne(new_event, (err, event)=>{
				res.status(200).json({"msg" : "Event Created"});
			});
		}
	});
});

module.exports = router;
