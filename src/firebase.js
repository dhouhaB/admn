import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "testdb-b6d40.firebaseapp.com",
  projectId: "testdb-b6d40",
  storageBucket: "testdb-b6d40.appspot.com",
  messagingSenderId: "385413049568",
  appId: "1:385413049568:web:6d9d40cc9ba386ba2cf485"
};







// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
