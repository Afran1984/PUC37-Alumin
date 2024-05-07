// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_5pswnMxpte86FZZASR49tf29GFFrkvQ",
  authDomain: "login-form-a20ea.firebaseapp.com",
  projectId: "login-form-a20ea",
  storageBucket: "login-form-a20ea.appspot.com",
  messagingSenderId: "274125059925",
  appId: "1:274125059925:web:8bc5f0baca914cc27461dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;