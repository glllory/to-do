import * as firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: "https://to-do-app-b236b.firebaseio.com",
    projectId: "to-do-app-b236b",
    storageBucket: "to-do-app-b236b.appspot.com",
    messagingSenderId: "240038761244"
}
const app = firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")
export const completetodosRef = databaseRef.child("completetodos")
export default app;
