
import * as firebase from 'firebase'

//const settings={timestampsInSnapshots:true}

var firebaseConfig = {
    apiKey: "AIzaSyAJGLg3IU4zJqhrEHf45clErvl2ZTDx3pQ",
    authDomain: "restaurent-69382.firebaseapp.com",
    databaseURL: "https://restaurent-69382.firebaseio.com",
    projectId: "restaurent-69382",
    storageBucket: "restaurent-69382.appspot.com",
    messagingSenderId: "41103305736",
    appId: "1:41103305736:web:3f1b11675f8692ecd4b5bd",
    measurementId: "G-CNFPC65P6X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
 // firebase.firestore().settings(settings)
  export default firebase