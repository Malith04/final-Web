import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLocBhgzRruoPsTAIhEq0JChJTm3Nwbj0",
  authDomain: "maxburn-gym-be018.firebaseapp.com",
  projectId: "maxburn-gym-be018",
  storageBucket: "maxburn-gym-be018.firebasestorage.app",
  messagingSenderId: "595288523183",
  appId: "1:595288523183:web:b677511c968c419912af5a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const userId = localStorage.getItem("loggedByUserId");
  if (!userId) {
    document.body.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; 
                  height: 100vh; background: rgba(0, 0, 0, 0.85); color: white;
                  font-size: 24px; text-align: center;">
        <div>
          <p>You must be logged in to access the Supplement Store.</p>
          <a href="Login.html" style="color: #00f; text-decoration: underline;">Go to Login</a>
        </div>
      </div>
    `;
  }
});



  
  
