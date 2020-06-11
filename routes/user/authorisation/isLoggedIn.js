var router = require('express').Router()


router.get('/', (req, res, next)=>{
	
	if(req.session.isLoggedIn == undefined){
		res.status(200).json({"Login" : true});
	} else {
		res.status(200).json({"Login" : false});
	}
});

module.exports = router
