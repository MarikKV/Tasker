import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD1LAf3dzSq_SHuYb2qcWViMYJTXCJZDEM",
    authDomain: "tasker-92659.firebaseapp.com",
    databaseURL: "https://tasker-92659.firebaseio.com",
    projectId: "tasker-92659",
    storageBucket: "tasker-92659.appspot.com",
    messagingSenderId: "793570878669",
    appId: "1:793570878669:web:520dc0a5b1dc5011187584"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };