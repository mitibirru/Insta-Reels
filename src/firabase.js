import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd3NHEx7P69u_sbTke3s0JFVQ38DpgaPU",
  authDomain: "instareels-aad4c.firebaseapp.com",
  projectId: "instareels-aad4c",
  storageBucket: "instareels-aad4c.appspot.com",
  messagingSenderId: "276764158848",
  appId: "1:276764158848:web:3f17bfbfb505c8a3dbaf65",
};

const app = firebase.initializeApp(firebaseConfig);
export const googleAuth = new firebase.auth.GoogleAuthProvider();
export default firebase;
export const auth = firebase.auth();
