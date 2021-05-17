import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDfO79Vrko6LedcThlgWRnHn8NGWF8HGwU",
    authDomain: "chat-app-ad990.firebaseapp.com",
    projectId: "chat-app-ad990",
    storageBucket: "chat-app-ad990.appspot.com",
    messagingSenderId: "38835861566",
    appId: "1:38835861566:web:c771ae033bfbbf67a5b96f"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db,auth,provider}