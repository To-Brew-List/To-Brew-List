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
app.get("/:user/:pass", function(req, res) {
	console.log(req.params)
	in_pass = req.params.pass
	in_user = req.params.user
	// var result = [in_user,in_pass]
	// res.send(result.toString());

	// Encrypt 
	var out_pass = CryptoJS.AES.encrypt(in_pass, 'ceaser cypher, but not actualy. this is just a long key');
	res.send(out_pass.toString())
	// TODO----------------------- when creating new user SEND [in_user,out_pass] to sql database

	// TODO-----------------------RETRIEVE sql_database[in_user][out_pass]

	var connection = mysql.createConnection({

		// TODO ---------------------- UPDATE with mysql database info
	  host: "localhost",
	  port: 3003,
	  // Your username
	  user: "root",
	  // Your password
	  password: "",
	  database: "user_database"
	});
	// TODO ------------------- probs a bad idea to select * from a user/password database
	// TODO ----------------------update database we are using
	connection.query("SELECT * FROM user_database", function(err,res){
		if(err){throw err}
		// TODO ------------------------------compare out_pass to the outpass stored on database
	})

	connection.end()
})





// // Decrypt 
// var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
// var plaintext = bytes.toString(CryptoJS.enc.Utf8);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});