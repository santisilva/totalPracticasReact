import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBz9QCZa-eRBaKr89usspJmghrfsM1R6Jo",
    authDomain: "crud-udemy-ss.firebaseapp.com",
    projectId: "crud-udemy-ss",
    storageBucket: "crud-udemy-ss.appspot.com",
    messagingSenderId: "461899674572",
    appId: "1:461899674572:web:f21172e8c7c500511f6369"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}