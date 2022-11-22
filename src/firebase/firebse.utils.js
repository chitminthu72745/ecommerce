import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const config = {
  apiKey: "AIzaSyCZuTtjaHtQRLKZaBR3DqtBBrmpfj_oVDs",
  authDomain: "crwn-db-68af7.firebaseapp.com",
  projectId: "crwn-db-68af7",
  storageBucket: "crwn-db-68af7.appspot.com",
  messagingSenderId: "729319386994",
  appId: "1:729319386994:web:616d2cdffa4c7b30c737eb",
  measurementId: "G-V88GPJCC3J",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
