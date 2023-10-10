
import { getAuth, browserLocalPersistence, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBWfVMVwx0AKO3zpu05coehtt8HeV7dCBs",
  authDomain: "formaspeak.firebaseapp.com",
  projectId: "formaspeak",
  storageBucket: "formaspeak.appspot.com",
  messagingSenderId: "519033150798",
  appId: "1:519033150798:web:56902ce2230bd6fd46121f",
  measurementId: "G-CFRTXGVBEQ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

setPersistence(auth, browserLocalPersistence);

export { app, firebaseConfig, auth, setPersistence, db };