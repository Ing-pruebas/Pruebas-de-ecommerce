var config = {
    apiKey: "AIzaSyBa-GWVxKLT8196wGq0g0CFmr055eUIo9A",
    authDomain: "ecommerce-a3829.firebaseapp.com",
    databaseURL: "https://ecommerce-a3829.firebaseio.com",
    projectId: "ecommerce-a3829",
    storageBucket: "",
    messagingSenderId: "809322412038"
  };
  firebase.initializeApp(config);

const txtEmail = document.getElementById('correo');
const txtPassword = document.getElementById('pass');
const btnLogin = document.getElementById('login');
btnLogin.addEventListener('click', e => {
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();

	const promesa = auth.signInWithEmailAndPassword(email,pass);
	promesa.catch(e => location.href = "admin/error.php");

});


firebase.auth().onAuthStateChanged(firebaseUser => {
	if (firebaseUser) {
			location.href="admin";
		}
});