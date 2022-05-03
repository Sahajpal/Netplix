import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAhivccCV3aIK0SVTNjNx69yK9kJEI7AOY",
  authDomain: "netflix-clone-76ebd.firebaseapp.com",
  projectId: "netflix-clone-76ebd",
  storageBucket: "netflix-clone-76ebd.appspot.com",
  messagingSenderId: "518059927679",
  appId: "1:518059927679:web:88786c00a71baefb33774a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
