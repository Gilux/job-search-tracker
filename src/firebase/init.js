import firebase from "firebase"

export default function initFirebase() {
  var config = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_AUTHDOMAIN,
    databaseURL: process.env.VUE_APP_DATABASEURL,
    projectId: process.env.VUE_APP_PROJECTID,
    storageBucket:
      process.env.VUE_APP_STORAGEBUCKET,
    messagingSenderId:
      process.env.VUE_APP_MESSAGINGSENDERID
  };

  firebase.initializeApp(config);
}