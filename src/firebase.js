import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBy0mD6X4lzVbz8vxgg82jqrLMlLM_mJkI",
  authDomain: "slack-clone-38503.firebaseapp.com",
  projectId: "slack-clone-38503",
  storageBucket: "slack-clone-38503.appspot.com",
  messagingSenderId: "627371826526",
  appId: "1:627371826526:web:6aa1393772e0278ebf83cf",
  measurementId: "G-MKFXCFX0ES",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
