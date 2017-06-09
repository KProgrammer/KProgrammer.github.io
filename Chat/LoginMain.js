var auth = firebase.auth();
console.log(window.location.pathname);

function goToChat(){

	firebase.auth().onAuthStateListener(user => {
		
		if (user){

			window.location.href = "https://kprogrammer.github.io/LoginIndex.html"

		}

	});

	
}

function Register() {

	var email = document.getElementById('EmailET').value;
	var password = document.getElementById('PasswordET').value;
	
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		console.log(errorCode);
  		console.log(errorMessage);
  		// ...
	});
	
}

function Login() {

	var email = document.getElementById('EmailET').value;
	var password = document.getElementById('PasswordET').value;

	auth.signInWithEmailAndPassword(email, password).catch(function(error){

		console.log(error.code);
		console.log(error.message);

	});

	goToChat();
	
}