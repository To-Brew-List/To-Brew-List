var express = require("express");
var path = require("path");

var router = express.Router();

//login.js model
var login = require("../models/login.js");

router.post("/login", function(req, res) {
	login.create([
		"username", "password"
		], [
			req.body.username,
			req.body.password
		], function(result) {
			res.json({ id: result.insertId })
		});
	console.log(req);
});

router.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/layouts/login.html"));
});

module.exports = router;