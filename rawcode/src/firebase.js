import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  apiKey: "AIzaSyCCgqZY90AoOMHCPTAnOHFtbPpd9kElkMo",
  authDomain: "contact-ar.firebaseapp.com",
  projectId: "contact-ar",
  storageBucket: "contact-ar.appspot.com",
  messagingSenderId: "197667585668",
  appId: "1:197667585668:web:2c542e911f2c4db1134cd1"
});

var db = firebaseApp.firestore();

export { db };
