 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
 import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCn-QjHh9GTBVap2g8dQ30Apukmo2ZGmY8",
   authDomain: "omnisport-e5b1b.firebaseapp.com",
   projectId: "omnisport-e5b1b",
   storageBucket: "omnisport-e5b1b.appspot.com",
   messagingSenderId: "857774118262",
   appId: "1:857774118262:web:3aec65c7442d60d67a5657",
   measurementId: "G-04PWV38R02"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);