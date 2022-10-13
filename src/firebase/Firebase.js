// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYwD7ThmRSV5rp24OgdzPnUlQOAsX9av0",
  authDomain: "rentusnicolasbarrionuevo.firebaseapp.com",
  projectId: "rentusnicolasbarrionuevo",
  storageBucket: "rentusnicolasbarrionuevo.appspot.com",
  messagingSenderId: "1018802141015",
  appId: "1:1018802141015:web:22800fb6059033bb6d3012",
  measurementId: "G-RG13N4BFSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)