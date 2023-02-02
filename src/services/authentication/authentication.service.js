import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpYzTk-OOLwkzLpO4BIdGpMCRH88zfItQ",
  authDomain: "mealtogo-776a4.firebaseapp.com",
  projectId: "mealtogo-776a4",
  storageBucket: "mealtogo-776a4.appspot.com",
  messagingSenderId: "1079595158914",
  appId: "1:1079595158914:web:96f6b19612046d63d6d39b",
  measurementId: "G-LJYFZ4E9CT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
