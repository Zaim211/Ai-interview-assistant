import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUJKhjrmy_NwY_s4GVytvDiNE7AGSuwCk",
  authDomain: "braided-haiku-401419.firebaseapp.com",
  projectId: "braided-haiku-401419",
  storageBucket: "braided-haiku-401419.firebasestorage.app",
  messagingSenderId: "149164392527",
  appId: "1:149164392527:web:2ed4ef3d7e0028edc6ea3a",
  measurementId: "G-THTRC895TL"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);
