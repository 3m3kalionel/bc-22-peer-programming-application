// (function () {

// 	var config = {
// 	    apiKey: "AIzaSyAVGWE5trc0RZ9DkYgMT4SfC-4p1dnBhWk",
// 	    authDomain: "pair-programming-application.firebaseapp.com",
// 	    databaseURL: "https://pair-programming-application.firebaseio.com",
// 	    projectId: "pair-programming-application",
// 	    storageBucket: "pair-programming-application.appspot.com",
// 	    messagingSenderId: "20264414160"
// 	};
// 	firebase.initializeApp(config);




// 	var login = document.querySelector("#login");
// 	var signUp = document.querySelector("#signup");
// 	var email = document.querySelector("#email");
// 	var password = document.querySelector("#password");


// // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
// //   // Handle Errors here.
// //   // var errorCode = error.code;
// //   // var errorMessage = error.message;
// //   alert(error.message);
// // });

// // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
// //   // Handle Errors here.
// //   alert(error.message);
// // });

// // Add login event
// 	login.addEventListener("click", function(event) {
// 		const emailValue = email.value;
// 		const passwordValue = password.value;
// 		const auth = firebase.auth();
// 		//sign in
// 		const promise = auth.signInWithEmailAndPassWord(emailValue, passwordValue);
// 		promise.then(function() {
// 			console.log("alriht")
// 		})
// 		promise.catch( (error) => console.log(error.message) );
// 	});

// 	//add signup event
// 	signUp.addEventListener("click", function(event) {
// 		const emailValue = email.value;
// 		const passwordValue = password.value;
// 		const auth = firebase.auth();
// 		//sign up
// 		const promise = auth.createUserWithEmailAndPassWord(emailValue, passwordValue);
// 		promise.then(function() {
// 			console.log("alriht")
// 		})
// 		promise.catch(error => console.log(error.message));
// 	});



// });


//-------------------------------------

// var config = {
//     apiKey: "AIzaSyAVGWE5trc0RZ9DkYgMT4SfC-4p1dnBhWk",
//     authDomain: "pair-programming-application.firebaseapp.com",
//     databaseURL: "https://pair-programming-application.firebaseio.com",
//     projectId: "pair-programming-application",
//     storageBucket: "pair-programming-application.appspot.com",
//     messagingSenderId: "20264414160"
// };

// firebase.initializeApp(config);

// const db = firebase.database();

// const login = document.querySelector("#login");
// const signUp = document.querySelector("#signup");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");

// const auth = firebase.auth();

// login.addEventListener('click', event => {
// 	const emailValue = email.value;
// 	const passwordValue = password.value;

// 	const promise = auth.signInWithEmailAndPassword(emailValue, passwordValue);
// 	promise.catch(error => console.log(error.message));
// 	promise.then(user => window.location = url('index.html');

// });

// auth.onAuthStateChanged(function(user){
// 	if(user){
// 		console.log(user)
// 		// window.location.href = '/dashboard';		
// 	}else{
// 		console.log("not logged in")
// 	}
// });

// const usersRefObject = firebase.database().ref.child('Users');

// //sync data in real time
// usersRefObject.on('child_added', snap => console.log(snap.val()));

// signUp.addEventListener('click', event => {
// 	const emailValue = email.value;
// 	const passwordValue = password.value;
// 	console.log(emailValue);
// 	const promise = auth.createUserWithEmailAndPassword(emailValue, passwordValue);

// 	promise.catch(error => console.log(error.message));
// 	promise.then(function(user) {
// 		if(user) {
// 			// const currentProfile = firebase.auth().currentUser;
// 			// currentProfile.updateProfile({
// 			// 	displayName: fullName
// 			// }).then(function)

// 			usersRefObject.push({
// 			Email : email,
// 			Fullname : fullName,
// 			Score : '0',
// 			Level : 'Beginner'

// 			});
// 			// window.location = "/index";
// 		}
// 	});
// });

// auth.onAuthStateChanged(function(user){
// 	if(user){
// 		console.log(user)
// 		// window.location = '/dashboard';
// 	} else{
// 		console.log("not logged in");
// 	}
// });













(function() {
	const config = {
	    apiKey: "AIzaSyAVGWE5trc0RZ9DkYgMT4SfC-4p1dnBhWk",
	    authDomain: "pair-programming-application.firebaseapp.com",
	    databaseURL: "https://pair-programming-application.firebaseio.com",
	    projectId: "pair-programming-application",
	    storageBucket: "pair-programming-application.appspot.com",
	    messagingSenderId: "20264414160"
	};

	firebase.initializeApp(config);

	

	//Add login event
	login.addEventListener('click', e => {
		const emailValue = email.value;
		const passwordValue = password.value;
		const auth = firebase.auth();

		if (emailValue.length < 4) {
          alert('Please enter a valid email address.');
          return;
        }
        if (passwordValue.length < 4) {
          alert('Please enter a password that spans more than 6 characters.');
          return;
        }

		//Sign in 
		const promise = auth.signInWithEmailAndPassword(emailValue, passwordValue);
		promise.catch( e => alert(e.message) );
		// console.log("logged in");
	});

	//Add signup event
	signup.addEventListener('click', e => {

		const emailValue = email.value;
		const passwordValue = password.value;
		const auth = firebase.auth();

		if (emailValue.length < 4) {
          alert('Please enter a valid email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password that spans more than 6 characters.');
          return;
        }

		//Create user 
		const promise = auth.createUserWithEmailAndPassword(emailValue, passwordValue);
		promise.catch( e => alert(e.message) );
	});

	logout.addEventListener('click', event => {
		firebase.auth().signOut();
	})

	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			console.log(firebaseUser);
			login.classList.remove("hide");
		} else {
			alert('not logged in');
			login.classList.add("hide");
		}
	});

}());