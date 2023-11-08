import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDzRvcpBL6Xzr5A0vKcoqse1NaOaScxE0w",
    authDomain: "projeto67-58fca.firebaseapp.com",
    databaseURL: "https://projeto67-58fca-default-rtdb.firebaseio.com",
    projectId: "projeto67-58fca",
    storageBucket: "projeto67-58fca.appspot.com",
    messagingSenderId: "1098016902960",
    appId: "1:1098016902960:web:f1b255ba48a605058c02f5"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();