import firebase from "firebase/app";
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQZye8lrtjej23uDSk6YIiVJW4w2WFcZ0",
    authDomain: "daily-moments-1c8c2.firebaseapp.com",
    projectId: "daily-moments-1c8c2",
    storageBucket: "daily-moments-1c8c2.appspot.com",
    messagingSenderId: "346531246872",
    appId: "1:346531246872:web:3db0241891522f36a2646d",
    measurementId: "G-RZC4WYF5ST"
  };

 const app = firebase.initializeApp(firebaseConfig)
 export const auth = app.auth()
