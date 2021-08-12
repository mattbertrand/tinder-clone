import firebase from "firebase";

const firebaseConfig = {
      apiKey: "AIzaSyC-fNA4V9EhKMhbYj-jpjIi6Fo4Dpw09A4",
      authDomain: "tinder-clone-38f65.firebaseapp.com",
      projectId: "tinder-clone-38f65",
      storageBucket: "tinder-clone-38f65.appspot.com",
      messagingSenderId: "468222179211",
      appId: "1:468222179211:web:8899bc9a4bdd471a6ca18e",
      measurementId: "G-EG2150MLH5"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;