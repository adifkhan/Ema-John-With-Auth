// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVwf4TbJE2BVfzGktN0GJvt0uM_bnxDrU",
    authDomain: "ema-john-e6156.firebaseapp.com",
    projectId: "ema-john-e6156",
    storageBucket: "ema-john-e6156.appspot.com",
    messagingSenderId: "494106596452",
    appId: "1:494106596452:web:3a3cdf941a3e4ca8ed7b71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;