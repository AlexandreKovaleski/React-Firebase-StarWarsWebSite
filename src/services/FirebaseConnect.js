import { initializeApp, } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCCK6MC62tvSftegoDlmlMo3ptdSqTGgcU",
  authDomain: "starwarsfansatitus.firebaseapp.com",
  projectId: "starwarsfansatitus",
  storageBucket: "starwarsfansatitus.appspot.com",
  messagingSenderId: "310078403512",
  appId: "1:310078403512:web:7902a4c0e27d5999ce154d"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);