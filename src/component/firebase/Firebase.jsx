// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhd79I9jgZazNZOvqPRjpv0BBuq2Y9aPA",
  authDomain: "auth-72de3.firebaseapp.com",
  projectId: "auth-72de3",
  storageBucket: "auth-72de3.appspot.com",
  messagingSenderId: "1028597272434",
  appId: "1:1028597272434:web:19320106f3467587a897eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);