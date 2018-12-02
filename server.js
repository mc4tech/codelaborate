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