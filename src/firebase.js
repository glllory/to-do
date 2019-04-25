import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA3-zN6qFmQD7Uw3SA7JQePS6zxFtkN9WI",
    authDomain: "to-do-app-b236b.firebaseapp.com",
    databaseURL: "https://to-do-app-b236b.firebaseio.com",
    projectId: "to-do-app-b236b",
    storageBucket: "to-do-app-b236b.appspot.com",
    messagingSenderId: "240038761244"
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")