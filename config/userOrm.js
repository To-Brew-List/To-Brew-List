var connection = require("../config?connectionUser.js");


var orm = {
	create: function(table, cols, vals, cb) {
	    var queryString = "INSERT INTO" + table;
	   
	   

	    connection.query(queryString, function(err, result) {
	      if (err) {
	        throw err;
	      }
	      cb(result);
	    });
	 }
};

module.exports = orm;