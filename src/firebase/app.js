


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaZjr1TZ9p-qAZJay033bS42dH-wkDvC4",
  authDomain: "abraham-website.firebaseapp.com",
  projectId: "abraham-website",
  storageBucket: "abraham-website.appspot.com",
  messagingSenderId: "924711983479",
  appId: "1:924711983479:web:cce7062d7d918eb781a972",
  measurementId: "G-EWPM9K1845"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//firestore
export const db = getFirestore(app);
//storage
const storage = getStorage(app);
//auth
const auth = getAuth(app);

 