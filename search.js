import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'

import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";   
import { getFirestore, collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';


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
console.log(db)

const bookCol = collection(db, "books");

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

      bookCardContainer.append(card)
      return { title: book.title, author: book.author, image: book.image, element: card }
    })
  })
  .catch(console.log);


const bookCardTemplate = document.querySelector("[book-template]")
const bookCardContainer = document.querySelector("[book-container]")
const searchInput = document.querySelector("#search")
console.log(searchInput)

let books = []  

searchInput.addEventListener("keypress", e => {
  const value = e.target.value.toLowerCase()
  console.log(books)
  books.forEach(book => {
    const isVisible =
      book.title.toLowerCase().includes(value) ||
      book.author.toLowerCase().includes(value)
    book.element.classList.toggle("hide", !isVisible)
  })
})
