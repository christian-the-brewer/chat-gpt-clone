// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDU7OHcfVkCQVwcgGnJG8fiREqxKYkvdA",
  authDomain: "chatgpt-clone-ad086.firebaseapp.com",
  projectId: "chatgpt-clone-ad086",
  storageBucket: "chatgpt-clone-ad086.appspot.com",
  messagingSenderId: "321092723088",
  appId: "1:321092723088:web:d00f3d69592047a675d315"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }