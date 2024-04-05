// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTZ9yUR0JhUj8T6D7mAUJSU1Ui0izNllA",
  authDomain: "mern-book-inventory-b6cad.firebaseapp.com",
  projectId: "mern-book-inventory-b6cad",
  storageBucket: "mern-book-inventory-b6cad.appspot.com",
  messagingSenderId: "976433008644",
  appId: "1:976433008644:web:ca1471168573033c396551"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;