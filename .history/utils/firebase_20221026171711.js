// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdPA9YbctfQB6gbCz08BEqeozlVKsMZLY",
  authDomain: "behonest-3d3d3.firebaseapp.com",
  projectId: "behonest-3d3d3",
  storageBucket: "behonest-3d3d3.appspot.com",
  messagingSenderId: "906279893465",
  appId: "1:906279893465:web:f047852c70d7ab5b1e81c8",
  measurementId: "G-VHREQE4ZL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);