var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var blog = require('./api/routes/blogs/blog');
var config = require('./config/config.json');
var Blog = require('./models/blogs/blog');
//Get the instance of express app
var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, '../Client/public')));

app.use('/api', blog);

//Connect to Mongo Database, If custom connections are not made then this connection will be shared across all models
mongoose.connect(config.DatabaseURL);

// assign the mongoose connection to a variable
var db = mongoose.connection;

//Verify the connection status with the database
db.on('error', console.error.bind(console,'Connection error ...!!!!!'));
db.once('open',function(){
  console.log("Connected to MongoDB successfully");
})

var port = config.port;

//instantiate the server at the specified port
app.listen(port, function(){
  console.log("Server started at port :"+port);
});
