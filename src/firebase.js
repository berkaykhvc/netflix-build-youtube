import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhoDeCtm2ZS3qzr0eWX8IF9-VzvIHAoKQ",
  authDomain: "netflix-clone-31bcf.firebaseapp.com",
  projectId: "netflix-clone-31bcf",
  storageBucket: "netflix-clone-31bcf.appspot.com",
  messagingSenderId: "615955108716",
  appId: "1:615955108716:web:39e22e96678e1141d3d949"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { app }