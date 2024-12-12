// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD93V00R-pZ6NkVnmFudN8Nn0QylQBDGSg",
    authDomain: "learning-1-f7091.firebaseapp.com",
    databaseURL: "https://learning-1-f7091.firebaseio.com",
    projectId: "learning-1-f7091",
    storageBucket: "learning-1-f7091.firebasestorage.app",
    messagingSenderId: "1096052718638",
    appId: "1:1096052718638:web:e1b7fc52326777146ab3bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

export default firebaseConfig;