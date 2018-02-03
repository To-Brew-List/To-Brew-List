	var  newUser = { 

		fisrtName: $("#first_name").val().trim(),
		lastName: $("#last_name").val().trim(),
		email: $("#email").val().trim(),
		password: $("#password").val().trim()
	};

	$("#register").on("click", function () {
		getUserName();

		$.ajax("/newUser", {
	      type: "POST",
	      data: newUser
	    }).then(
	      function() {
	        console.log("created new user");
	      }
	    );
	});

