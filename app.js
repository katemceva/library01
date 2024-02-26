import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCtQFh4D3zRJgpG5cln7l8b3QR49mVyfXY",
    authDomain: "liruslibrary.firebaseapp.com",
    projectId: "liruslibrary",
    storageBucket: "liruslibrary.appspot.com",
    messagingSenderId: "315010160413",
    appId: "1:315010160413:web:cad0644751486b277e33f4"
  };

  // Autotication
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();


//btn admin
document.getElementById("myBtn").onclick = function () {
  location.href = "lirusadmin.html";
};






  //btn google
  const googleLogin = document.getElementById("google-login");
  googleLogin.addEventListener("click", function(){

    signInWithPopup(auth, provider)
    .then((result) =>{
        const  credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        window,location.href = "loguser.html";

    } 
    ).catch((error)=> {
        const errorCode = error.code;
        const errorMessage = error.message;

    }
    
    );
  })

  //Database service create
  
  const db = getFirestore();

  //Collection reference
  const docref = doc(db, "books");

  //get collection
  const docSnap = await getDocs(docref);
  
    console.log(docSnap.data());
  