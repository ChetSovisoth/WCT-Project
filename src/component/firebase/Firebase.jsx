// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCYLybQCax_c9lq_4pRdCIcCtbctiN0r3I",
  authDomain: "login-870e7.firebaseapp.com",
  projectId: "login-870e7",
  storageBucket: "login-870e7.appspot.com",
  messagingSenderId: "224521898004",
  appId: "1:224521898004:web:dd9c469bc4e176ec23ff01",
  measurementId: "G-PT1STSE139"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};