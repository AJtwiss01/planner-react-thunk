import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const {
  REACT_APP_FIREBASE_KEY,
  REACT_APP_FIREBASE_AUTHURL,
  REACT_APP_FIREBASE_DATABASEURL,
  REACT_APP_FIREBASE_PROJECTID,
  REACT_APP_STORAGEBUCKET,
  REACT_APP_MESSAGINGSENDERID,
  REACT_APP_APPID

} = process.env;

var config = {
  apiKey: `${REACT_APP_FIREBASE_KEY}`,
  authDomain: `${REACT_APP_FIREBASE_AUTHURL}`,
  databaseURL: `${REACT_APP_FIREBASE_DATABASEURL}`,
  projectId: `${REACT_APP_FIREBASE_PROJECTID}`,
  storageBucket: `${REACT_APP_STORAGEBUCKET}`,
  messagingSenderId: `${REACT_APP_MESSAGINGSENDERID}`,
  appId: `${REACT_APP_APPID}`
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
