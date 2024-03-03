
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU3cbypRsxUL8KXpm_jTCHTAla3YE77yM",
  authDomain: "qrapp-53a08.firebaseapp.com",
  projectId: "qrapp-53a08",
  storageBucket: "qrapp-53a08.appspot.com",
  messagingSenderId: "1099239671312",
  appId: "1:1099239671312:web:32620549807ba3c7ed2c95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}