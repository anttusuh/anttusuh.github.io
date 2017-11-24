// function changeTab(tabName) {
//     var i;
//     var x = document.getElementsByClassName("city");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     document.getElementById('signUpForm').style.display = "block";
//     document.getElementById('loginForm').style.display = 'none';
// }

function toggleTab() {
  if ($('#loginForm').is(":visible")) {
    $('#loginForm').hide();
    $('#signUpForm').show();
  } else {
    $('#loginForm').show();
    $('#signUpForm').hide();
  }
}

const auth = firebase.auth();

// auth.signInWithEmailAndPassword(email, pass);
// auth.createUserWithEmailAndPassword(email, pass);
// auth.onAuthStateChanged(firebaseUser => {});
const modalLogin = document.getElementById('modalLogin');
const btnLogInTab = document.getElementById('btnLogInTab');
const btnSignUpTab = document.getElementById('btnSignUpTab')

const divLogIn = document.getElementById('divLogIn');
const divSignUp = document.getElementById('divSignUp');

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');

const btnSignIn = document.getElementById('btnSignIn');

const btnSignUp = document.getElementById('btnSignUp');
const btnFbSignUp = document.getElementById('btnFbSignUp');
const btnGSignUp = document.getElementById('btnGSignUp');

const mainBody = document.getElementById('mainBody');

// btnSignUpTab.addEventListener('click', e=> {
//   divLogIn.style.display = 'none';
//   divSignUp.style.display = 'initial';
//   btnLogInTab.style.background = 'gray';
//   btnSignUpTab.style.background = 'white';
//
// });
//
// btnLogInTab.addEventListener('click', e => {
//   divSignUp.style.display = 'none';
//   divLogIn.style.display = 'initial';
//   btnLogInTab.style.background = 'white';
//   btnSignUpTab.style.background = 'gray';
//
// });

btnSignIn.addEventListener('click', e => {
  //Get email and pass
  //TO DO: CHECK FOR REAL EMAIL
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
  modalLogin.style.display = 'none';
  mainBody.style.display = 'initial';

  // console.log(email + " " + pass + " " + auth);
});

// btnCancel.addEventListener('click', e => {
//   modalLogin.style.display = 'none';
// });

btnSignUp.addEventListener('click', e => {
  //Get email and pass
  //TO DO: CHECK FOR REAL EMAIL
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //Sign in
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});



btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();
  modalLogin.style.display = 'block';
  mainBody.style.display = 'none';
});

// btnGoogle.addEventListener('click', e => {
//   var  provider = new firebase.auth.GoogleAuthProvider();
//   provider.setCustomParameters({
//     'login_hint': 'user@example.com'
//   });
//   auth.signInWithRedirect(provider);
//
//   firebase.auth().getRedirectResult().then(function(result) {
//     var user = result.user;
//     console.log(user);
//
//   }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//     console.log("Error: " + errorCode +" " + errorMessage + " " + email + credential);
// });
// });

// Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');

  }
  else {
    console.log('not logged in');
  }
});

// window.onclick = function(event) {
//   if(event.target == modalLogin) {
//     modalLogin.style.display = 'none';
//   }
// }

window.onload = function() {
  modalLogin.style.display = 'block';
  mainBody.style.display = 'none';
  // divSignUp.style.display = 'none';
  // btnSignUpTab.style.background = 'gray';
}
