import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyA36wH9WCnbv0tiBfXcx6_c4ewJ703f42o",
  authDomain: "e-ride-cb9db.firebaseapp.com",
  projectId: "e-ride-cb9db",
  storageBucket: "e-ride-cb9db.appspot.com",
  messagingSenderId: "890192014751",
  appId: "1:890192014751:web:a367429556d30a47aae1aa"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
