import * as firebase from 'firebase/app';
import 'firebase/firebase-storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB1sysJrwwbzRN3v6fJUROqNBYBmAs_HhM",
    authDomain: "firegram-68d65.firebaseapp.com",
    databaseURL: "https://firegram-68d65.firebaseio.com",
    projectId: "firegram-68d65",
    storageBucket: "firegram-68d65.appspot.com",
    messagingSenderId: "128631270829",
    appId: "1:128631270829:web:6cb6e68bef2ada84edc524"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp  }