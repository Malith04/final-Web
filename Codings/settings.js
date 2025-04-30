import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

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

  const auth=getAuth();
  const db=getFirestore();

  onAuthStateChanged(auth, (user)=>{
    const loggedByUserId=localStorage.getItem('loggedByUserId');
    if(loggedByUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedByUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserFName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;

            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedByUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='Register.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })