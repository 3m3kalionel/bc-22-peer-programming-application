(function () {

	var config = {
	    apiKey: "AIzaSyAVGWE5trc0RZ9DkYgMT4SfC-4p1dnBhWk",
	    authDomain: "pair-programming-application.firebaseapp.com",
	    databaseURL: "https://pair-programming-application.firebaseio.com",
	    projectId: "pair-programming-application",
	    storageBucket: "pair-programming-application.appspot.com",
	    messagingSenderId: "20264414160"
	};
	firebase.initializeApp(config);




	var login = document.querySelector("#login");
	var signUp = document.querySelector("#signup");
	var email = document.querySelector("#email");
	var password = document.querySelector("#password");


// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   // var errorCode = error.code;
//   // var errorMessage = error.message;
//   alert(error.message);
// });

// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   alert(error.message);
// });

// Add login event
	login.addEventListener("click", function(event) {
		const emailValue = email.value;
		const passwordValue = password.value;
		const auth = firebase.auth();
		//sign in
		const promise = auth.signInWithEmailAndPassWord(emailValue, passwordValue);
		promise.then(function() {
			console.log("alriht")
		})
		promise.catch( (error) => console.log(error.message) );
	});

	//add signup event
	signUp.addEventListener("click", function(event) {
		const emailValue = email.value;
		const passwordValue = password.value;
		const auth = firebase.auth();
		//sign up
		const promise = auth.createUserWithEmailAndPassWord(emailValue, passwordValue);
		promise.then(function() {
			console.log("alriht")
		})
		promise.catch(error => console.log(error.message));
	});



});



