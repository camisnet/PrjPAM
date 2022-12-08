import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyAqriv0JPkGanLSqazZLfHLh5eYDmmqwtM",
    authDomain: "prjpam-aa99c.firebaseapp.com",
    databaseURL: "https://prjpam-aa99c-default-rtdb.firebaseio.com",
    projectId: "prjpam-aa99c",
    storageBucket: "prjpam-aa99c.appspot.com",
    messagingSenderId: "484722715329",
    appId: "1:484722715329:web:223f30f5848eacc7784240",
    measurementId: "G-RH1N3QKRXS"
  };

if(!firebase.app.length == 0){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase;