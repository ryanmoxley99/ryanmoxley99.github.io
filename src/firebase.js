import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {ref, getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBmWP-MYQxiW1JEkFX64RfyM7ekyAbSfZk",
  authDomain: "clueless-hopkins.firebaseapp.com",
  databaseURL: "https://clueless-hopkins-default-rtdb.firebaseio.com",
  projectId: "clueless-hopkins",
  storageBucket: "clueless-hopkins.appspot.com",
  messagingSenderId: "945920393435",
  appId: "1:945920393435:web:35b99d58897b3caedf8cfe",
  measurementId: "G-L9XTC1SMZW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getDatabase(app)
export const dbRef = ref(db)