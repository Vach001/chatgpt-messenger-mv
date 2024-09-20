import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsjmlhXNG_V7m1Gsqbwprgndjo1OBUWEE",
  authDomain: "chatgpt-messenger-mv.firebaseapp.com",
  projectId: "chatgpt-messenger-mv",
  storageBucket: "chatgpt-messenger-mv.appspot.com",
  messagingSenderId: "19772431760",
  appId: "1:19772431760:web:26d4574791027247332715"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };