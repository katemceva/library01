import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCtQFh4D3zRJgpG5cln7l8b3QR49mVyfXY",
    authDomain: "liruslibrary.firebaseapp.com",
    projectId: "liruslibrary",
    storageBucket: "liruslibrary.appspot.com",
    messagingSenderId: "315010160413",
    appId: "1:315010160413:web:cad0644751486b277e33f4"
  };

 
  //Database service create
  
  const db = getFirestore();
  const bookCol = collection(db, "books");

  //Collection reference
  const docref = doc(db, "books");

  //get collection
  const docSnap = await getDocs(docref);
  
    console.log(docSnap.data());





  // Check if the scanned ISBN exists in Firestore
  const booksRef = firestore.collection('books');
  const query = booksRef.where('ISBN', '==', scannedISBN).limit(1);

  query.get().then((snapshot) => {
    if (snapshot.empty) {
      console.log("Book not found in the database.");
      return;
    }
  








import { BrowserMultiFormatReader } from '@zxing/library';
const codeReader = new BrowserMultiFormatReader();
function startScanning() {
    codeReader.decodeFromInputVideoDevice(undefined, 'video').then((result) => {
        console.log(result.text); // Barcode text
        // Call reservation process or handle the barcode result as needed
    }).catch((err) => {
        console.error(err);
    });
}


<script>
  const codeReader = new ZXing.BrowserMultiFormatReader();

  codeReader.decodeFromVideoDevice(null, 'webcam-preview', (result, err) => {
    if (result) {
      // properly decoded qr code
      console.log('Found QR code!', result)
      document.getElementById('result').textContent = result.text
    }

    if (err) {
      // As long as this error belongs into one of the following categories
      // the code reader is going to continue as excepted. Any other error
      // will stop the decoding loop.
      //
      // Excepted Exceptions:
      //
      //  - NotFoundException
      //  - ChecksumException
      //  - FormatException

      if (err instanceof ZXing.NotFoundException) {
        console.log('No QR code found.')
      }

      if (err instanceof ZXing.ChecksumException) {
        console.log('A code was found, but it\'s read value was not valid.')
      }

      if (err instanceof ZXing.FormatException) {
        console.log('A code was found, but it was in a invalid format.')
      }
    }
  })
</script>