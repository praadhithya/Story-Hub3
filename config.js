import { firebase } from '@firebase/app'
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyDujgEdhOz4Ylc-tWDe9bXj-MW1EZEO-fs",
    authDomain: "story-hub-51557.firebaseapp.com",
    projectId: "story-hub-51557",
    storageBucket: "story-hub-51557.appspot.com",
    messagingSenderId: "332389891600",
    appId: "1:332389891600:web:25d0c16d7e83179ddf5495"
  };

  // Initialize Firebase
  if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);
 
 export default firebase.firestore();