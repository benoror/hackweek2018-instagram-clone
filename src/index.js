import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyAmpTryHcBD88c9FUkBdm3IUbNFEVDSbNA",
  authDomain: "hackweek2018-instagram-clone.firebaseapp.com",
  databaseURL: "https://hackweek2018-instagram-clone.firebaseio.com",
  projectId: "hackweek2018-instagram-clone",
  storageBucket: "hackweek2018-instagram-clone.appspot.com",
  messagingSenderId: "933763647325"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
