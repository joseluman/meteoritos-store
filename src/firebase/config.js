// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPXubP56Rl07tFWF-se-IcxTMBLUxL7E0",
    authDomain: "meteorito-store.firebaseapp.com",
    projectId: "meteorito-store",
    storageBucket: "meteorito-store.appspot.com",
    messagingSenderId: "653116987498",
    appId: "1:653116987498:web:d80c7ec9f88c528cabd213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db ;