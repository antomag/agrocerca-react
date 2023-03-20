// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzbhaoXrUfASCq4nOJp-wzpBSPOhDoDBM",
  authDomain: "agrocerca-99160.firebaseapp.com",
  projectId: "agrocerca-99160",
  storageBucket: "agrocerca-99160.appspot.com",
  messagingSenderId: "840019144499",
  appId: "1:840019144499:web:7bb696e12062f9d028d846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db