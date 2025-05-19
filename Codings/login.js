import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyBLocBhgzRruoPsTAIhEq0JChJTm3Nwbj0",
    authDomain: "maxburn-gym-be018.firebaseapp.com",
    projectId: "maxburn-gym-be018",
    storageBucket: "maxburn-gym-be018.firebasestorage.app",
    messagingSenderId: "595288523183",
    appId: "1:595288523183:web:b677511c968c419912af5a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

function showMessage(message, divId) {
    const messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function() {
        messageDiv.style.opacity = 0;
    }, 9000);
}

const signInButton = document.getElementById("submitSignIn");
signInButton.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    console.log("Email entered:", email);
    console.log("Password entered:", password);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Logged in successfully:", user); 
            showMessage("Login successful", "signInMessage");
            localStorage.setItem("loggedByUserId", user.uid);
            window.location.href = "FinalWeb.html"; 
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error Code:", errorCode);
            console.log("Error Message:", errorMessage);

            if (errorCode === "auth/user-not-found") {
                showMessage("No user found with this email", "signInMessage");
            } else if (errorCode === "auth/wrong-password") {
                showMessage("Incorrect password", "signInMessage");
            } else {
                showMessage("Error: " + errorMessage, "signInMessage");
            }
        });
});
