// firebase.ts
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOImLXpiNY9ZzRd5HRjf_36pJnYcUbCMk",
  authDomain: "auth-app-f5e5a.firebaseapp.com",
  projectId: "auth-app-f5e5a",
  storageBucket: "auth-app-f5e5a.firebasestorage.app",
  messagingSenderId: "1075416870681",
  appId: "1:1075416870681:web:6dda34e024766ba98a9f88",
  measurementId: "G-7S0NHRJFRN"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);


