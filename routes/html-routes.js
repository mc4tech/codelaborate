const path = require('path');



module.exports = function(app){



    app.get('/', (req, res)=>{
        res.sendFile(__dirname + '/../public/index.html');
    })
    app.get('/register', (req,res)=> {
        console.log("in register")
        res.sendFile(path.join(__dirname + '/../public/register.html'));
    })




}