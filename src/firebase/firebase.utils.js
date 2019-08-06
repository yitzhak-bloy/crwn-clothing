import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC8gbjQ0AeSNdhS9LII1u2w01_bnSFZWqE",
    authDomain: "crwn-db-156a7.firebaseapp.com",
    databaseURL: "https://crwn-db-156a7.firebaseio.com",
    projectId: "crwn-db-156a7",
    storageBucket: "",
    messagingSenderId: "40078285918",
    appId: "1:40078285918:web:6bb6614a5460883b"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;