// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getDatabase, type Database } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Extend globalThis type
declare global {
  var firebase: {
    app: FirebaseApp;
    db: Database;
  } | undefined;
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ47hiWAP40QakzXdrqdCdQNEB7fGAfDI",
  authDomain: "cursos-online-practica9.firebaseapp.com",
  databaseURL: "https://cursos-online-practica9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cursos-online-practica9",
  storageBucket: "cursos-online-practica9.firebasestorage.app",
  messagingSenderId: "334712965639",
  appId: "1:334712965639:web:0b26b13156b4dc6a4678a2"
};

// Initialize Firebase
let app: FirebaseApp;
let db: Database;

// Ensure Firebase is only initialized once
if (!globalThis.firebase) {
  app = initializeApp(firebaseConfig);
  db = getDatabase(app);
  globalThis.firebase = { app, db };
} else {
  app = globalThis.firebase.app;
  db = globalThis.firebase.db;
}

export { db };
export default app;