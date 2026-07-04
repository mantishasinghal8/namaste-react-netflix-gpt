// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnJ9tXHya59HfW7hPUoqGcmQwqG2Bl-wE",
    authDomain: "netflixgpt-98a6c.firebaseapp.com",
    projectId: "netflixgpt-98a6c",
    storageBucket: "netflixgpt-98a6c.firebasestorage.app",
    messagingSenderId: "32515104787",
    appId: "1:32515104787:web:f8a0e00c8290a14fc61fe6",
    measurementId: "G-RQK9B3QLFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
