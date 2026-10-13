import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEDYfpBrJJJE8ZsrCi9ezTzpl7srvu4Wo",
  authDomain: "ss-seed-shoo.firebaseapp.com",
  projectId: "ss-seed-shoo",
  storageBucket: "ss-seed-shoo.firebasestorage.app",
  messagingSenderId: "19549535279",
  appId: "1:19549535279:web:ab0dc3e448f9ed235a5ada"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);

export default app;
