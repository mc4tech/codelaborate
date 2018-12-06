// Require all models
const db = require('../models');

// module.exports exports this function so it can be required by another file (in this case, server.js)
// Must pass in app because it contains the Express application
module.exports = function (app) {
    // Route for retrieving all projects from the database via a GET request
    app.get('/api/project', function (req, res) {
        // Find all Projects
        db.Project.findAll({name})
            .then(function (dbUser) {
                // If all Projects are successfully found, send them back to the client
                res.json(dbproject);
            })
            .catch(function (err) {
                // If an error occurs, send the error back to the client
                res.json(err);
            });
    });

    // Route for saving a new Projects entry to the database via a POST request
    app.post('/api/project', function (req, res) {
        // Create a new Project entry in the database
        console.log(req.body);
        db.Project.create(req.body)
            .then(function (dbProject) {
                // Then send the results to the client
                res.json(dbProject);
            })
            .catch(function (err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });
    });

    // Route for saving updates to a project
    app.put('/api/project', function (req, res) {
        // Find an entry by ID and set the item count to the incoming item count
        db.Project.findOneAndUpdate({name: req.body.name})
            .then(function (dbProject) {
                // Then send the results to the client
                res.json(dbProject);
            })
            .catch(function(err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });
    });

       // Route for saving updates to a project
       app.delete('/api/project', function (req, res) {
        // Find an entry by ID and set the item count to the incoming item count
        db.Project.findOneAndRemove({name: req.body.name})
            .then(function (dbProject) {
                // Then send the results to the client
                res.json(dbProject);
            })
            .catch(function(err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });
    });
  
 sterling1
};

=======
  });
};

master
