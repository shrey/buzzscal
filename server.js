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
var registerRoute = require('./routes/authorisation/register')
var loginRoute = require('./routes/authorisation/login')
var loginSocietyRoute = require('./routes/authorisation/loginSociety')
var registerSocietyRoute = require('./routes/authorisation/registerSociety')
var eventCreateRoute = require('./routes/event/create_event')


//Creating Routes

//For Wrong Routes
app.get('/*', (req, res, next)=>{
	res.sendFile(path.join(__dirname, '/client/build/index.html'))
});


//Authorisation Routes
app.use('/user/register', registerRoute);
app.use('/user/login', loginRoute);
app.use('/society/login', loginSocietyRoute);
app.use('/society/register', registerSocietyRoute);
app.use('/event/create', eventCreateRoute);


//Start Server
app.listen(process.env.PORT | 3000, ()=>{
	console.log(`Server Running on port ${process.env.PORT | 3000}`)
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
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
