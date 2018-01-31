

var  user = {};
$("#register").on("click", function () {
	getUserName();

	$.ajax("/newUser", {
      type: "POST",
      data: user
    }).then(
      function() {
        console.log("created new user");
      }
    );
});

function getUserName() {
	
	user.fisrtName = $("#first_name").val().trim(),
	user.lastName = $("#last_name").val().trim(),
	user.email = $("#email").val().trim(),
	user.password = $("#password").val().trim()
};



module.exports = user;