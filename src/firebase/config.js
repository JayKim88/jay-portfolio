import firebase from "firebase/app";
import "firebase/storage"; //store images
import "firebase/firestore"; //database
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDfk1k54G3aPQonI5tkSFmQfmwVcSivHH8",
  authDomain: "jay-portfolio-487aa.firebaseapp.com",
  projectId: "jay-portfolio-487aa",
  storageBucket: "jay-portfolio-487aa.appspot.com",
  messagingSenderId: "323478201418",
  appId: "1:323478201418:web:b9f003d016706abf97f2b3",
  measurementId: "G-PMB5VCRL0Y",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
