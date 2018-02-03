var express = require("express");
var path = require("path");

var router = express.Router();

var user = require("../models/user.js");

router.post("/register", function(req, res) {
	

	user.create([
		"firstName", "lastName", "email", "todoList", "doneList"
		], [
			req.body.firstName,
			req.body.lastName,
			req.body.email,
			req.body.password
		], function(result) {
			res.json({ id: result.insertId })
	});

	console.log(req);
 });

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/layouts/index.html"));
});

router.get("/register", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/layouts/get-started.html"));
});

// router.get("/login", function(req, res) {
//   res.sendFile(path.join(__dirname, "../views/layouts/login.html"));

router.get("/blog", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/layouts/personal.html"));
});
module.exports = router;