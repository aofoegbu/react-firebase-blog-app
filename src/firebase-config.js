import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCIUA-uCxwfC5GoaBSLYkSPUQ1QEJFGCIU",
    authDomain: "fir-blog-a5bfd.firebaseapp.com",
    projectId: "fir-blog-a5bfd",
    storageBucket: "fir-blog-a5bfd.appspot.com",
    messagingSenderId: "337601504339",
    appId: "1:337601504339:web:d4f3f33a496191755752a6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
 


