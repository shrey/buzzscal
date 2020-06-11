var express = require('express')
var logger = require('morgan')
var path = require('path')
var session = require('express-session')
var bodyParser = require('body-parser')
var cors = require('cors')
require('dotenv').config()

var app = express()

//Some Extra things
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('client/build'));
app.use(session({secret: 'EventRegister', resave: true, saveUninitialized: true}));


//Importing Files
var registerRoute = require('./routes/user/authorisation/register')
var loginRoute = require('./routes/user/authorisation/login')
var loginSocietyRoute = require('./routes/society/authorisation/loginSociety')
var registerSocietyRoute = require('./routes/society/authorisation/registerSociety')
var eventCreateRoute = require('./routes/society/event/create_event')
var joinSocietyRoute = require('./routes/society/actions/join')
var removeMemberRoute = require('./routes/society/actions/remove')
var allSocietyRoute = require('./routes/society/profile/allSocieties')
var getSocietyRoute = require('./routes/society/profile/profile')


//Creating Routes

//For Wrong Routes
app.get('/*', (req, res, next)=>{
	res.sendFile(path.join(__dirname, '/client/build/index.html'))
});


//User

//Authorisation Routes
app.use('/user/register', registerRoute);
app.use('/user/login', loginRoute);


//Society

//Authorisation Routes
app.use('/society/login', loginSocietyRoute);
app.use('/society/register', registerSocietyRoute);


//Profile Routes
app.use('/society/', getSocietyRoute);
app.use('/society/all', allSocietyRoute);


//Actions Routes
app.use('/society/join', joinSocietyRoute);
app.use('/society/remove', removeMemberRoute);


//Event Routes
app.use('/event/create', eventCreateRoute);



//Start Server
app.listen(process.env.PORT | 5000, ()=>{
	console.log(`Server Running on port ${process.env.PORT | 5000}`)
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handle
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log("Message: ",err.message);
  console.log("ERROR: ",res.locals.error);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
