// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCqTg8pDUrrHla8Udpn6BxFnqh8u7nkEik",
  authDomain: "auth-komsanhub.firebaseapp.com",
  projectId: "auth-komsanhub",
  storageBucket: "auth-komsanhub.appspot.com",
  messagingSenderId: "589133234249",
  appId: "1:589133234249:web:a7976d19092750dd643f98",
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
const firestore = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const database = firebase.database();
const timestamps = firebase.firestore.Timestamp;

export { firestore, auth, storage, database, timestamps, db };