var express = require("express");
var bodyParser = require("body-parser");
// var materialize = require("materialize-css");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 

// require("./routes/htmlRoutes.js")(app);
// require("./routes/apiRoutes.js")(app);

var mysql = require("mysql");

//routes with server access
var routes = require("/controllers/loginController.js");
app.use(routes);

app.listen(PORT, function () {
	console.log("App now listening at localhost: " + PORT);

});