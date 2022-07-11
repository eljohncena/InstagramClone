
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAi1MLQ1hsr1zN-h_rDoQu9jdWX8MsZw7s",
  authDomain: "instagramclone-1edd6.firebaseapp.com",
  projectId: "instagramclone-1edd6",
  storageBucket: "instagramclone-1edd6.appspot.com",
  messagingSenderId: "228794522835",
  appId: "1:228794522835:web:696e233a03ac9a76dbc826",
  measurementId: "G-30B9TH3VGY"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
