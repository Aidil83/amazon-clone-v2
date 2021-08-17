import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXbnbe6uNoxINiM4FV_fb-ZTcrw3nEKD0",
  authDomain: "amzn-2-project.firebaseapp.com",
  projectId: "amzn-2-project",
  storageBucket: "amzn-2-project.appspot.com",
  messagingSenderId: "123024877903",
  appId: "1:123024877903:web:d50713f7ba46227509bd3a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
