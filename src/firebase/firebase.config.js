// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE.env.VITE_apiKey,
  authDomain: import.meta.VITE.env.VITE_authDomain,
  projectId: import.meta.VITE.env. VITE_projectId,
  storageBucket: import.meta.VITE.env.VITE_storageBucket,
  messagingSenderId: import.meta.VITE.env. VITE_messagingSenderId,
  appId: import.meta.VITE.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;