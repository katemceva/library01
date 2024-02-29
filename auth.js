import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'

  
import { getFirestore, collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';


const firebaseConfig = {
apiKey: "AIzaSyCtQFh4D3zRJgpG5cln7l8b3QR49mVyfXY",

authDomain: "liruslibrary.firebaseapp.com",
projectId: "liruslibrary",
storageBucket: "liruslibrary.appspot.com",
messagingSenderId: "315010160413",
appId: "1:315010160413:web:cad0644751486b277e33f4"
};

const app = initializeApp(firebaseConfig);
//Database service create

const auth = getAuth(app);
//console.log(db)

//function for registration
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const authForm = document.querySelector("#authForm");
const secretContent = document.querySelector("#secretContent");
const signUpButton = document.querySelector("#signUpButton");
const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

secretContent.style.display = 'none';

const userSignUp = async() => {
    const signUpEmail = userEmail.value;
    const signUpPassword = userPassword.value;
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Your account in library Lirus has been created!");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
    })
}

const userSignIn = async() => {
    const signInEmail = userEmail.value;
    const signInPassword = userPassword.value;
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
        const user = userCredential.user;
        alert("Welcome to library Lirus!");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
    })
}

const checkAuthState = async() => {
    onAuthStateChanged(auth, user => {
        if(user) {
            authForm.style.display = 'none';
            secretContent.style.display = 'block';
        }
        else {
            authForm.style.display = 'block';
            secretContent.style.display = 'none';
        }
    })
}

const userSignOut = async() => {
    await signOut(auth);
}

checkAuthState();

signUpButton.addEventListener('click', userSignUp);
signInButton.addEventListener('click', userSignIn);
signOutButton.addEventListener('click', userSignOut);
