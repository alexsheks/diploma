import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyANRLseBV8r2kBYX7Hkx-4HFb_YEFOZpC0",
  authDomain: "just-an-atom.firebaseapp.com",
  projectId: "just-an-atom",
  storageBucket: "just-an-atom.appspot.com",
  messagingSenderId: "893836291939",
  appId: "1:893836291939:web:6e0214c54b60d7add5ad56",
  measurementId: "G-4ZL9YQY6HK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
