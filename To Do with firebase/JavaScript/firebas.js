
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { 
    getFirestore, 
    collection,
     addDoc,
     getDocs,
     doc, 
     deleteDoc,
     updateDoc,
     setDoc,
   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
  import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
    } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAHV4FAadpXA-jVmuSMoiBtuwP12qvRuMA",
    authDomain: "fir-project-smit-4f427.firebaseapp.com",
    databaseURL: "https://fir-project-smit-4f427-default-rtdb.firebaseio.com",
    projectId: "fir-project-smit-4f427",
    storageBucket: "fir-project-smit-4f427.appspot.com",
    messagingSenderId: "838624561487",
    appId: "1:838624561487:web:a1422c263e3b68962a9d3a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize auth
const auth = getAuth();

export{
    collection,
    addDoc,
    db,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
    auth,
    createUserWithEmailAndPassword,
    setDoc,
    signInWithEmailAndPassword,
}