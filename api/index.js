var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var cors = require('cors');

var superheroesRouter = require('./controllers/superheroes');

var app = express();

app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use('/api', superheroesRouter);

// Start the server
var port = 4001;
app.listen(port, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', port ,port);
});

app.on('error', function (e) {
    // Handle your error here
    console.log("--HTTP SERVER ERROR EVENT!--")
    console.log(e);
});

process.on('uncaughtException', function(e){
    console.log("---PROCESS UNCAUGHT EXCEPTION---")
    console.log(e);
});