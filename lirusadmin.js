import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";




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
  
  const db = getFirestore(app);

  //Collection reference
  const docref = doc(db, "liruslibrary");

  //get collection
  const docSnap = await getDocs(docref);
  
    console.log(docSnap.data());