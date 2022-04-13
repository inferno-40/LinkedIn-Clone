import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAAZPCjHt_LCDtBloFCgjtzsK6o6qfVdOg",
  authDomain: "linkedin-clone-13664.firebaseapp.com",
  projectId: "linkedin-clone-13664",
  storageBucket: "linkedin-clone-13664.appspot.com",
  messagingSenderId: "192253221214",
  appId: "1:192253221214:web:6ba282d3fa23f9a6b617cf",
  measurementId: "G-73WLG0S82K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
