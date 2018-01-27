//file path for html
var path = require("path");

module.exports = function(app) {
	//html get request for main
	app.get(function(req, res) {
		res.sendFile(path.join(__dirname, "../views/layouts/index.html"));
	});

	//html get request for info
	app.get("/register", function(req, res) {
		res.sendFile(path.join(__dirname, "../views/layouts/get_started.html"));
	});

	//html get request for login
	app.get("/login", function(req, res) {
		res.sendFile(path.join(__dirname, "../views/layouts/login.html"));
	});

	//html get request for blog
	app.get("/blog", function(req, res) {
		res.sendFile(path.join(__dirname, "../views/layouts/personal.html"));
	});
}

