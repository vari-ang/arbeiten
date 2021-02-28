// Firebase App is always required and must be first
const firebase = require("firebase");

var config = {
    apiKey: "AIzaSyBW_kIQOi03P0rTQKOnNuMKM6CxDRvvnGg",
    authDomain: "arbeiten-b2.firebaseapp.com",
    databaseURL: "https://arbeiten-b2.firebaseio.com",
    projectId: "arbeiten-b2",
    storageBucket: "arbeiten-b2.appspot.com",
    messagingSenderId: "698667628997"
  };

  const firebaseApp = firebase.initializeApp(config);
  export default firebaseApp;