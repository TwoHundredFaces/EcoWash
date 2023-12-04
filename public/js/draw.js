import { initializeApp } from "firebase/app";
import { getDatabase, setLogLevel, ref } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/app";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const firebaseConfig = {
    apiKey: "AIzaSyAmwns4DotxSo-2a1Kx11vnNQ-Y9uyy-Zo",
    authDomain: "ecowash-c462b.firebaseapp.com",
    projectId: "ecowash-c462b",
    storageBucket: "ecowash-c462b.appspot.com",
    messagingSenderId: "728673754156",
    appId: "1:728673754156:web:b18478e1a3d60e3b040589",
    measurementId: "G-766BF1DKF1"
  };