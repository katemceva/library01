
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getFirestore, collection, getDocs, addDoc, query, where  } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';                                                               


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 //  FIREBASE CONFIG OBJECT HERE
 const firebaseConfig = {
apiKey: "AIzaSyCtQFh4D3zRJgpG5cln7l8b3QR49mVyfXY",
authDomain: "liruslibrary.firebaseapp.com",
projectId: "liruslibrary",
storageBucket: "liruslibrary.appspot.com",
messagingSenderId: "315010160413",
appId: "1:315010160413:web:cad0644751486b277e33f4"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);



 const bookCol = collection(db, "books");
 
async function getBookByISBN(isbn){
  const q = query(bookCol, where("isbn", "==", isbn));
  const docs = await getDocs(q)
  return docs.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

let firestoreBooks = null;
async function getBooks(db) {
  const bookSnapshot = await getDocs(bookCol);
  const bookList = bookSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
  console.log(bookList);
  return bookList;
}
getBooks(db)
  .then(booklist => firestoreBooks = booklist)
  .then(fb => {
    return books = fb.map(book=> {
      const card = bookCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      const image= card.querySelector("[data-image]")

      header.textContent = book.title;
      body.textContent = book.author;
      image.src = book.image; 
      body.textContent = book.status;

      bookCardContainer.append(card)
      return { title: book.title, author: book.author, image: book.image, status: book.status, element: card }
    })
  })
  .catch(console.log);



  const bookCardTemplate = document.querySelector("[book-template]")
  const bookCardContainer = document.querySelector("[book-container]")

  //const listBook = document.querySelector("#display")

  let books = []  


  books.forEach(book => {
    // i Check if the book's status is "free"
    if (book.status === "free") { 
      console.log("Book is free:", book.title);
    
      book.element.classList.toggle("hide", !isVisible);
      bookCardContainer.append(book.element);
    }
  });

  export {
    db,
    getBookByISBN
  }