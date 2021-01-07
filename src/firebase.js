import firebase from 'firebase/app'
import "firebase/auth";

const app =  firebase.initializeApp({
    apiKey: "AIzaSyAD5VJ23IQhtekKAWqA3_EdYPX3SWBEJZ4",
    authDomain: "lab-06-project-development.firebaseapp.com",
    projectId: "lab-06-project-development",
    storageBucket: "lab-06-project-development.appspot.com",
    messagingSenderId: "800194830014",
    appId: "1:800194830014:web:cedc7c6df200c05cd888ef"
  });
  // Initialize Firebase

const auth = app.auth();
export {auth};
export default app;