import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  // YOUR FIREBASE CONFIG
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
