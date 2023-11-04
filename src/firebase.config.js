// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ4EfKSC2TpR61Kij8o1-XrNtPShJgwBk",
  authDomain: "ass-11-jwt.firebaseapp.com",
  projectId: "ass-11-jwt",
  storageBucket: "ass-11-jwt.appspot.com",
  messagingSenderId: "854363630163",
  appId: "1:854363630163:web:3a26ccd58d039746ecb4a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth