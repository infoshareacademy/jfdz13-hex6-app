import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAF-mrNRSM6WciPDXu98hGYue2mKXDcar0",
    authDomain: "hex6-app.firebaseapp.com",
    databaseURL: "https://hex6-app.firebaseio.com",
    projectId: "hex6-app",
    storageBucket: "hex6-app.appspot.com",
    messagingSenderId: "577225480422",
    appId: "1:577225480422:web:6daadeadd5b535b76b4327"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));


