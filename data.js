
const firebaseConfig = {
    apiKey: "AIzaSyDdBpWVPqRoTZq5yp0KCMc5Toc_kRIi31Y",
    authDomain: "licentauserdb.firebaseapp.com",
    //databaseURL: "https://licentadb-300ee-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "licentauserdb",
    storageBucket: "licentauserdb.appspot.com",
    messagingSenderId: "327941102837",
    appId: "1:327941102837:web:e206d29d55b392f90639bc",
    measurementId: "G-K5LCM6PPNV"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth =  firebase.auth();
  var database = firebase.database();
  
  //sign up function
  function register(){
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var password = document.getElementById("password").value;
    var confPassword = document.getElementById("confirmpassword").value;
  
    // email regex4
    var emailFilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // password regex
    var passwordFilter = /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;
  
    if (email.length == 0 || name.length == 0 || surname.length == 0 || password.length == 0 || confPassword.length == 0) {
       alert("Toate campurile trebuie completate!");
    } else {
      // email validation
      if (!emailFilter.test(email)) {
        document.getElementById("emailWrong").style.color = "Red";
        alert("Emailul gresit. Trebuie sa fie valid!");
        return false;
      } else {
        // password validation
        if (!passwordFilter.test(password)) {
          document.getElementById("emailWrong").style.color = "#abcfd6";
          document.getElementById("passwordWrong").style.color = "Red";
          alert("Parola trebuie sa contina minim 5 caractere, o cifra, o litera mare, o litera mica si un caracter special");
          return false;
        } else {
          // confirmation password validation
          if (password!=confPassword){
           document.getElementById("emailWrong").style.color = "#abcfd6";
           document.getElementById("passwordWrong").style.color = "#abcfd6";
           document.getElementById("confirmpasswordWrong").style.color = "Red";
           alert("Parola nu este identica");
          } else {
            // all is good
            document.getElementById("emailWrong").style.color = "#abcfd6";
            document.getElementById("passwordWrong").style.color = "#abcfd6";
            document.getElementById("confirmpasswordWrong").style.color = "#abcfd6";
            firebase.auth().createUserWithEmailAndPassword(email, password)
              .then((userCredential) => {
                var user = userCredential.user;
                /*
                firebase.database().ref('users/' + user).set({
                  email: email,
                  name: name,
                  surname: surname
                }, (error) => {
                  if (error) {
                    var errorMessage = error.message;
                    alert(errorMessage);
                  } else {
                    window.location.href = "CodUnic.html";
                  }
                });  
                */
                var user = userCredential.user;            
                window.location.href = "CodUnic.html";
              })
              .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage);
              });
          }
        }
      }
    }
  }
  
  //sign in function
  function login(){
    var email = document.getElementById("email").value;
    var password  = document.getElementById("password").value;
     if (email.length == 0 || password.length == 0) {
      alert("Ambele campurile trebuie completate!");
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          //var user = userCredential.user;
          window.location.href = "DatePersonale.html";
        })
        .catch((error) => {
          //var errorCode = error.code;
          //var errorMessage = error.message;
          alert("Emailul sau parola sunt gresite.");
        });
    }
  }
  
  /*
  // signed in user
  const user = firebase.auth().currentUser;
  if (user !== null) {
    // user is signed in
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var password = document.getElementById("password").value;
    const uid = user.uid;
    
    // get a user's provider-specific profile information
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.name);
      console.log("  Surname: " + profile.surname);
      console.log("  Email: " + profile.email);
      console.log("  Password: " + profile.password);
    });
  } else {
    // no user is signed in
  }
*/