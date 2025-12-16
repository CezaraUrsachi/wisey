// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Ivj5vmhfnoZOi3efiRBYyesmZKb9xOw",
  authDomain: "wisey-2a074.firebaseapp.com",
  projectId: "wisey-2a074",
  storageBucket: "wisey-2a074.firebasestorage.app",
  messagingSenderId: "818166818439",
  appId: "1:818166818439:web:61baaa95b3efbb58afba22",
  measurementId: "G-K9X9BL7RZ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
