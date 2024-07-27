// // firbas connct 
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
//   import { getFirestore, collection, addDoc, updateDoc, getDocs, doc, deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyAHV4FAadpXA-jVmuSMoiBtuwP12qvRuMA",
//     authDomain: "fir-project-smit-4f427.firebaseapp.com",
//     databaseURL: "https://fir-project-smit-4f427-default-rtdb.firebaseio.com",
//     projectId: "fir-project-smit-4f427",
//     storageBucket: "fir-project-smit-4f427.appspot.com",
//     messagingSenderId: "838624561487",
//     appId: "1:838624561487:web:a1422c263e3b68962a9d3a"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   // initialize Cloud Firestore and get a reference to the service 
//   const db = getFirestore(app);

//   export {
//     app,
//     db,
//     collection,
//     addDoc,
//     getDocs,
//     doc,
//     updateDoc,
//     deleteDoc,
//   }


// New
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import {getFirestore, collection, addDoc, doc, updateDoc, getDocs, deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

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

export{
  collection,
  addDoc,
  db, 
  doc, 
  updateDoc, 
  getDocs,
  deleteDoc
}


// Get Data : import collection , addDoc











