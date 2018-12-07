const path = require('path');

//Pass in 'app' for Express
module.exports = function (app) {
   
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/register', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/register.html'));
    });

     app.get('/editor', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/editor.html'));
    });

}; 

