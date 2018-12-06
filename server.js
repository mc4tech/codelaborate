const express = require("express");
// const mongoose = require("mongoose");    
// const passport  = require("passport");    

//////////////////////
//LocalStrategy = require("passport-local");   passportLocalMongoose = require("passport-local-mongoose");
/////////////////////

const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
///
// app.use(passport.initialize());
// app.use(passport.session());



// Mongoose connection ** HAVE TO EDIT URI ***
// mongoose.Promise = global.Promise;

// mongoose.connect(
  
//   process.env.MONGODB_URI ||  "mongodb://user:pandapass1@ds259820.mlab.com:59820/heroku_d3j0q25z", {

//   useMongoClient: true
//   }
//  );


// require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set the port to 5000 OR let the process set the port (if deployed to Heroku)
const PORT = process.env.PORT || 5000;

// Initialize Express
const app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Use express.static to serve the public folder as a static directory
app.use(express.static('public'));

// Connect to the Mongo DB using the codelaborate database (will be created if it doesn't exist)
mongoose.connect('mongodb://localhost/codelaborate', { useNewUrlParser: true });

// Routes
// API Routes (require from routes file and pass in Express app)
require('./routes/api-routes')(app);
// HTML Routes (require from routes file and pass in Express app)
require('./routes/html-routes')(app);

// Start the server
app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});
