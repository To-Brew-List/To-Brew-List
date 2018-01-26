var express = require("express");
var CryptoJS = require("crypto-js");
var bodyParser = require("body-parser");
var path = require("path");
var CryptoJS = require("crypto-js");
var mysql = require("mysql");
var app = express();
var PORT = 3002;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var in_pass = ""
var in_user = ""
var method = ""
app.get("/:method/:user/:pass", function(req, res) {
	method = req.params.method
	in_pass = req.params.pass
	in_user = req.params.user
	if(method=="login"){
		login(in_user,in_pass)
	}
	if(method=="new_user"){
		new_user(in_user,in_pass)
	}
})
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
function encrypt(in_pass){
	return(CryptoJS.AES.encrypt(in_pass, 'ceaser cypher, but not actualy. this is just a long key'))
}
function decrypt(out_pass){
	var de_pass  = CryptoJS.AES.decrypt(out_pass.toString(), 'ceaser cypher, but not actualy. this is just a long key');
	return(de_pass.toString(CryptoJS.enc.Utf8))
}
function connect(method){
	var connection = mysql.createConnection({

		// TODO ---------------------- UPDATE with mysql database info
	  host: "localhost",
	  port: 3003,
	  // Your username
	  user: "root",
	  // Your password
	  password: "",
	  database: "login_db"
	});
	// TODO ------------------- probs a bad idea to select * from a user/password database
	// TODO ----------------------update database we are using
	connection.query("SELECT * FROM login_db", function(err,res){
		if(err){throw err}
		//TODO --------------------- use return() to return username/password info for use by other functions
		return()
	})

	connection.end()
}
function new_user(user_name,password){
	//username is not valid by default
	var user_name_available = false
	//TODO -----CONNECT TO login_db to see if username is available
	if(user_name_available){
		// return info that username is available and the encrypted password to be stored in database
		res.send([true,encrypt(password)])
	}
}
function login(user_name,password){
	// login is unavailable by default
	var result = false
	var user_name_inuse = false
	//TODO -----------CONNECT TO login_db to see if username exists
	if(user_name_inuse){
		var encrypted_pass = ""
		//TODO --------------CONNECT TO login_db to retrieve associated encrypted password
		var decrypted_pass = decrypt(encrypted_pass)
		if(decrypted_pass === password){
			result = true
		}
	}
	res.send(true)
}