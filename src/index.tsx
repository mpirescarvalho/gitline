import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyByp3Jreuuv1TaQ1WatMVXule9TK4S6a14',
  authDomain: 'gitline.firebaseapp.com',
  databaseURL: 'https://gitline.firebaseio.com',
  projectId: 'gitline',
  storageBucket: 'gitline.appspot.com',
  messagingSenderId: '646145992838',
  appId: '1:646145992838:web:100a1f01f9f2063024c907',
  measurementId: 'G-LM63VF4WR4',
};

// fetch('/__/firebase/init.json').then(async response => {
//   console.log(await response.text());
//   firebase.initializeApp(await response.json());
//   firebase.analytics();
// });

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
