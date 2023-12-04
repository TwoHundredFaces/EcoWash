import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAmwns4DotxSo-2a1Kx11vnNQ-Y9uyy-Zo",
    authDomain: "ecowash-c462b.firebaseapp.com",
    projectId: "ecowash-c462b",
    storageBucket: "ecowash-c462b.appspot.com",
    messagingSenderId: "728673754156",
    appId: "1:728673754156:web:b18478e1a3d60e3b040589",
    measurementId: "G-766BF1DKF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth(app);

let userInp = document.getElementById('userInp');
let emailInp = document.getElementById('emailInp');
let pwordInp = document.getElementById('pwordInp');
let regForm = document.getElementById('regForm');

let RegisterUser = evt => {
    evt.preventDefault();

    createUserWithEmailAndPassword(auth, userInp.ariaValueMax, emailInp.ariaValueMax, pwordInp.value).then((credentials) => {

        console.log(credentials);
    })
    .catch((error) => {
        alert(error.message);
        console.log(error.code);
        console.log(error.message);
    });
}

regForm.addEventListener('submit', RegisterUser);