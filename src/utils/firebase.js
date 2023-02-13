// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBIIzo-wcsBm331fjU6Mp8vnd-jjtvP34",
  authDomain: "instafood-ee592.firebaseapp.com",
  projectId: "instafood-ee592",
  storageBucket: "instafood-ee592.appspot.com",
  messagingSenderId: "928614056670",
  appId: "1:928614056670:web:f80c780b864e2fd1fc784f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;

