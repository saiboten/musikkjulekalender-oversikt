import firebase from "firebase/app";
import "firebase/database";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyAc_q_dQ8B2WrbjYNT6VdjokNZg-TKRDp4",
  authDomain: "musikkjulekalender-oversikt.firebaseapp.com",
  databaseURL: "https://musikkjulekalender-oversikt.firebaseio.com",
  projectId: "musikkjulekalender-oversikt",
  storageBucket: "",
  messagingSenderId: "255375635475"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);