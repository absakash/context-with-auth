// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeHgHWaw5yv7dOWXssE7Vtlx2f8PJ8WAc",
  authDomain: "email-pass-auth-cae0f.firebaseapp.com",
  projectId: "email-pass-auth-cae0f",
  storageBucket: "email-pass-auth-cae0f.appspot.com",
  messagingSenderId: "886853129985",
  appId: "1:886853129985:web:4eb9fa98a47109fe07ad00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;