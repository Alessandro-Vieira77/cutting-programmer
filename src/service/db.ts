import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "barbeiro-bc4b9.firebaseapp.com",
  projectId: "barbeiro-bc4b9",
  storageBucket: "barbeiro-bc4b9.firebasestorage.app",
  messagingSenderId: "884415725298",
  appId: "1:884415725298:web:6f91f2154f6fc9f79e1a6b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
