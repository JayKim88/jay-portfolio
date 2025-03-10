import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // Store images
import { getFirestore, serverTimestamp } from "firebase/firestore"; // Database

import.meta.env.API;

// ✅ Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Use modular imports
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
const timeStamp = serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
