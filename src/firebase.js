// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMV8c6s80Ft5TFkw8ASP37nKuFB060JkY",
  authDomain: "slack-clone-c4c26.firebaseapp.com",
  projectId: "slack-clone-c4c26",
  storageBucket: "slack-clone-c4c26.appspot.com",
  messagingSenderId: "91841047526",
  appId: "1:91841047526:web:2cc0cc8d8dee2e3b100427",
};

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth();
// const provider = new GoogleAuthProvider();

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
