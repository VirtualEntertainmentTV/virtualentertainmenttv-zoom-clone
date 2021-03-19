import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "virtualentertainmenttv-fc003.firebaseapp.com",
  projectId: "virtualentertainmenttv-fc003",
  storageBucket: "virtualentertainmenttv-fc003.appspot.com",
  messagingSenderId: "638460872633",
  appId: "1:638460872633:web:da08ad4a5de2fd6db71868",
  measurementId: "G-BWRS2B71TC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;
