
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBDOqBwUwiaFzBd3Ca7Y0_i6fvcm0KsbW8",
  authDomain: "miapp-af7c8.firebaseapp.com",
  projectId: "miapp-af7c8",
  storageBucket: "miapp-af7c8.appspot.com",
  messagingSenderId: "1015153116460",
  appId: "1:1015153116460:web:1f770c71b15c28cac75889"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)