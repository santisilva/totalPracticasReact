import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDoItvEVr9L0ifEmLw49pmpy0JVvVZsl48",
    authDomain: "pokemons-1a1c2.firebaseapp.com",
    projectId: "pokemons-1a1c2",
    storageBucket: "pokemons-1a1c2.appspot.com",
    messagingSenderId: "967734735028",
    appId: "1:967734735028:web:62c09cf18cb6965131e7e1",
    measurementId: "G-2QMVMV471K"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export {auth, firebase, db, storage }