import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
    
//   };

  var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBNpG7C9Ko45ORnECGEm6ZJVloQsvKd2_c",
    authDomain: "portfolio-d9ff8.firebaseapp.com",
    projectId: "portfolio-d9ff8",
    storageBucket: "portfolio-d9ff8.appspot.com",
    messagingSenderId: "969738798518",
    appId: "1:969738798518:web:65569fdb5b093c5cceed17",
    measurementId: "G-CL8SZZXL90"
  });

  var db = firebaseApp.firestore();

  export {db};