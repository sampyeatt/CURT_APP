var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.post('numberSearch', function(req, res) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        user : 'root',
        password : 'password',
        host : 'localhost',
        database : 'mydb'
    });

    connection.connect(function (err) {
        if (err){
            console.log(err);
            res.sendStatus(500);
            return;
        }
        connection.query({

        });
    })
});



app.listen(3000, '0.0.0.0', function() {
    console.log('Server running at http://0.0.0.0:3000/');
});