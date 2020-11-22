 var config = {
    apiKey: "AIzaSyC6FVZTd_t3VsfMWOoVZetmWzkcUaJ8ooo",
    authDomain: "publico-77fca.firebaseapp.com",
    databaseURL: "https://publico-77fca.firebaseio.com",
    projectId: "publico-77fca",
    storageBucket: "",
    messagingSenderId: "1029918228342"
  };
  firebase.initializeApp(config);

  function IngresoGoogle() {
  	if (!firebase.auth().currentUser) {
  		var provider = new firebase.auth.GoogleAuthProvider();

  		provider.addScope('https://www.googleapis.com/auth/plus.login');
  		firebase.auth().signInWithPopup(provider).then(function(result){
  			var token = result.credential.accessToken;
  			var user = result.user;
  			var name = result.user.displayName;
  			var correo = result.user.email;
  			var foto = result.user.photoURL;
  			var red = 'Google';
  			location.href = 'login/index.php?name=' + name + '&correo=' + correo + '&foto=' + foto + '&red=' + red;
  		}).catch(function(error){
  			var errorCode = error.code;
  			if (errorCode === 'auth/account-exist-with-diferent-credential') {
  				alert('El usuario ya existe');
  			}
  		});
  	}else{
  		firebase.auth().signOut();
  	}
  }

  document.getElementById('btn-Google').addEventListener('click',IngresoGoogle,false);

    function IngresoFacebook() {
  	if (!firebase.auth().currentUser) {
  		var provider = new firebase.auth.FacebookAuthProvider();

  		provider.addScope('public_profile');
  		firebase.auth().signInWithPopup(provider).then(function(result){
  			var token = result.credential.accessToken;
  			var user = result.user;
  			var name = result.user.displayName;
  			var correo = result.user.email;
  			var foto = result.user.photoURL;
  			var red = 'Facebook';
  			location.href = 'login/index.php?name=' + name + '&correo=' + correo + '&foto=' + foto + '&red=' + red;
  		}).catch(function(error){
  			var errorCode = error.code;
  			if (errorCode === 'auth/account-exist-with-diferent-credential') {
  				alert('El usuario ya existe');
  			}
  		});
  	}else{
  		firebase.auth().signOut();
  	}
  }

  document.getElementById('btn-Facebook').addEventListener('click',IngresoFacebook,false);


    function IngresoTwitter() {
  	if (!firebase.auth().currentUser) {
  		var provider = new firebase.auth.TwitterAuthProvider();


  		firebase.auth().signInWithPopup(provider).then(function(result){
  			var token = result.credential.accessToken;
  			var user = result.user;
  			var name = result.user.displayName;
  			var correo = 'no lo manda';
  			var red = 'Twitter';
  			location.href = 'inicio/index.php?name=' + name;
  		}).catch(function(error){
  			var errorCode = error.code;
  			if (errorCode === 'auth/account-exist-with-diferent-credential') {
  				alert('El usuario ya existe');
  			}
  		});
  	}else{
  		firebase.auth().signOut();
  	}
  }

  document.getElementById('btn-Twitter').addEventListener('click',IngresoTwitter,false);




  

