// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUXGIidMthkkaeROoVQ6JNZRj5ixfBRIQ",
  authDomain: "otp-password-3ae6d.firebaseapp.com",
  projectId: "otp-password-3ae6d",
  storageBucket: "otp-password-3ae6d.appspot.com",
  messagingSenderId: "765186341850",
  appId: "1:765186341850:web:bfde08c9505aa782991ee3",
  measurementId: "G-MFCMP0TK9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
