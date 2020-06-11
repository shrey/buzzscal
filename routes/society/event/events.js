var router = require('express').Router()
var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId


//Mongo Url
const MONGO_URI = process.env.MONGO_URI | 'mongodb://localhost:8000'


router.get('/', (req, res, next)=>{

	MongoClient.connect(MONGO_URI, (error, client)=>{
	
		if(error){
			res.status(501).json({"msg" : "Cannot connect to Database Server"});
		} else {
		
			var event_db = client.db('buzzcal').collection('event')
			var user_db = client.db('buzzcal').collection('user')

			event_db.find().toArray((err, events)=>{
			
				if(err){
					res.status(501).json({"msg" : "Internal Server Error"});
				} else {
					if(events == null){
						res.status(501).json({"msg" : "No Event Available"});
					} else {
					
						var publicEvents = new Array()
						var userEvents = new Array()
						var ctr = 0;

						if(req.session.isLoggedin == undefined){
							for(let event of events){
								ctr++;
								if(event.isPublic == true){
									publicEvents.push(event)
								}
							}
							if(ctr == events.length){
								res.status(200).json(userEvents);
							}

						} else {
							user_db.findOne({ _id : new ObjectId(req.session._id)}, (err1, user)=>{
							
								var society = user.society;

								for(let event of events){
									ctr++;
																
									var registed_index = user.registered_event.findIndex((ele)=>{
										return (ele === event._id.toString())
									});

									var society_index = user.society.findIndex((ele)=>{
										return (ele === event.society_id.toString())
									});

									if(registered_index > -1){
										event.registered = true;
										userEvents.push(event)

									} else {

										if(event.isPublic == true){
											event.registerd = false;
											userEvents.push(event);
	
										} else {
										
											if(society_index > -1){
												event.registered = false;
												userEvents.push(event);

											}
										}	
									}
								}

								if(ctr == events.length){
									res.status(200).json(userEvents);
								}
							});
						}
					}
				}
			});
		}
	});
});

module.exports = router;
