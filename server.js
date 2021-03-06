var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
//var materialize = require("materialize-css");

var app = express();
var PORT = process.env.PORT || 3003;

//var PORT = process.env.PORT;
console.log(PORT)
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride("_method"));

app.use(express.static("public"));

var mysql = require("mysql");

// routes with server access

// var blogRoutes = require("./controllers/blogController");
// app.use("/blog", blogRoutes);

var loginRoutes = require("./controllers/loginController.js");
app.use("/login", loginRoutes);

var routes = require("./controllers/userController.js");
app.use("/", routes);

app.listen(PORT, function () {
	console.log("App now listening at localhost: " + PORT);

});