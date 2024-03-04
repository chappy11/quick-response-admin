
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { config } from "../constant/config";

const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.AUTH_DOMAIN,
  projectId: config.PROJECT_ID,
  storageBucket: config.STORAGE_BUCKET,
  messagingSenderId: config.MESSAGING_SENDER_ID,
  appId: config.APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };

