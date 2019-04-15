import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyBmLCm5hvVGvpGLtEVy_gUTtrn3_i65PoI",
  authDomain: "upconf-45ed3.firebaseapp.com",
  databaseURL: "https://upconf-45ed3.firebaseio.com",
  projectId: "upconf-45ed3",
  storageBucket: "upconf-45ed3.appspot.com",
  messagingSenderId: "825288737604"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
