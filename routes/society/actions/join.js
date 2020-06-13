var router = require('express').Router()
var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId


//Mongo Url
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost'


router.post('/', (req, res, next)=>{

	MongoClient.connect(MONGO_URI, (error, client)=>{
		if(error){
			res.status(501).json({'msg' : 'Cannot Connect to Database Server '});
		} else {
			var enrollment_id = req.body.id;
			var id;
			var exist = false;

			var society_db = client.db("buzzcal").collection('society')
			var user_db = client.db('buzzcal').collection('user')

			user_db.findOne({ enrollment_id : enrollment_id }, (err, user)=>{
			
				if(user == null){
					res.status(501).json({"msg" : "User Doesn't Exist"});
				} else { 
					id = user._id;
					var society = user.society;

					if(society == undefined){
						society = [req.session._id];
					} else {
						var index = society.findIndex((ele)=>{
							return (ele === req.session._id);
						});

						if(index == -1){
							society.push(req.session._id);
						} else {
							exist = true;
							res.status(200).json({"msg" : "User Alreadey Registered"});
						}
					};

					if(exist == false){
						var query = {
							$set : {
								society : society
							}
						};

						user_db.updateOne({ _id : id }, query);
					}
				}
			});

			if(exist == false){
				society_db.findOne({ _id : new ObjectId(req.session._id) }, (err, society)=>{
                        
	                                if(society == null){
        	                                res.status(501).json({"msg" : "User Doesn't Exist"});
	                                } else { 
        	                                id = user._id;
                	                        var member = society.members;

	                                        if(member == undefined){
        	                                        member = [req.body.id];
                	                        } else {
                        	                        member.push(req.body.id);
                                	        };

                                        	var query = {
                                                	$set : {
                                                        	members : members
	                                                }
        	                                };

                	                        user_db.updateOne({ _id : id }, query, (err, update)=>{
							res.status(200).json({"msg" : "User Added"});
						});
	                                }
        	                });
			}
		}
	});
});
module.exports = router
