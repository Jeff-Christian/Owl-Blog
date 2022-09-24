import { getFirestore } from "firebase/firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCMbxXdWHa2e2bKhkS2fKe0hXHEhL0XtM",
  authDomain: "owl-blog.firebaseapp.com",
  projectId: "owl-blog",
  storageBucket: "owl-blog.appspot.com",
  messagingSenderId: "452367218202",
  appId: "1:452367218202:web:91493bc6a93904b39543a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };