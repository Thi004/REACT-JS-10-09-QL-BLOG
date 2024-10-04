// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmm-PPV8n_TTx14uaqiSI-VJ9rUmYypl0",
    authDomain: "savefile-e2657.firebaseapp.com",
    projectId: "savefile-e2657",
    storageBucket: "savefile-e2657.appspot.com",
    messagingSenderId: "620159427774",
    appId: "1:620159427774:web:5073f35fa616c6f4766aef",
    measurementId: "G-TDHPR5ZJ41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);