import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

const firebaseConfig = {
  apiKey: "AIzaSyBLocBhgzRruoPsTAIhEq0JChJTm3Nwbj0",
  authDomain: "maxburn-gym-be018.firebaseapp.com",
  projectId: "maxburn-gym-be018",
  storageBucket: "maxburn-gym-be018.firebasestorage.app",
  messagingSenderId: "595288523183",
  appId: "1:595288523183:web:b677511c968c419912af5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const f_name = document.getElementById('f_name').value;
const l_name = document.getElementById('l_name').value;
const b_day = document.getElementById('b_day').value;
const c_no = document.getElementById('c_no').value;
const email = document.getElementById('email').value;
const height = document.getElementById('height').value;
const weight = document.getElementById('weight').value;
const check_male = document.getElementById('check-male').value;
const check_female = document.getElementById('check-female ').value;
const password = document.getElementById('password').value;
const c_password = document.getElementById('c_password').value;


const sign_up = document.getElementById('sign_up');
sign_up.addEventListener("click", function (event){
    event.preventDefault()
    alert(5)
})



