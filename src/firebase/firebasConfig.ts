// libs/firebase-shared/src/lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { config } from "dotenv";

// Load environment variables from .env file
config();

// Firebase configuration for your project
const firebaseConfig = {
  apiKey: "AIzaSyBq1swhH0X1eTDPv2daktW2HV9NVXUykKA",
  authDomain: "proyectowebib.firebaseapp.com",
  databaseURL: "https://proyectowebib-default-rtdb.firebaseio.com",
  projectId: "proyectowebib",
  storageBucket: "proyectowebib.appspot.com",
  messagingSenderId: "889748609643",
  appId: "1:889748609643:web:5f2125253a9579f11eaf2e",
};

const app = initializeApp(firebaseConfig);

// Export initialized services
export const auth = getAuth(app);
export const db = getFirestore(app);
