var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var ProjectSchema = new Schema({

    html: {
      type: String,
      
    },
   
  css: {
      type: String,
      
    },
    
    javascript: {
      type: String,
      
    },
    name: {
       name: "project1",
      type: Date,
      default: Date.now
    }
  });
  var Project = mongoose.model("Project", ProjectSchema);
  module.exports = Project;