var express = require("express");

var router = express.Router();

var user = require("../models/user.js");

roueter.post("/register", function(req, res) {
	user.create()
})