// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIe-47sjipb14ClnDvCy1d2tnLqUwY42Y",
  authDomain: "barbeiro-bc4b9.firebaseapp.com",
  projectId: "barbeiro-bc4b9",
  storageBucket: "barbeiro-bc4b9.firebasestorage.app",
  messagingSenderId: "884415725298",
  appId: "1:884415725298:web:6f91f2154f6fc9f79e1a6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
