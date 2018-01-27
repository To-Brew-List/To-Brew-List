var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routes/htmlRoutes.js")(app);

// //handlebars setup
// var exphbs = require("express-handlebars");
 
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

var mysql = require("mysql");
//route to server
var routes = require("./controllers/brewController.js");

app.use(routes);

app.listen(PORT, function() {
	console.log("App now listening at localhost: " + PORT);

});