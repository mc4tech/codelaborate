const db = require('../models');
module.exports = function(app) {
  app.post('/api/users'), function (req, res) {
    console.log('------Adding Link in mongo');
    db.user.create(req.body)
        .then(function (dbusers) {
            res.json(dbusers);
        })
        .catch(function (err) {
            res.json(err);
        });

  }
  app.get('/api/users', function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
};

