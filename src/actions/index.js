import { UsersRef, todosRef, completetodosRef } from '../firebase/firebase'
import { FETCH_TODOS, FETCH_COMPLETEDTODOS } from './types'
import { auth } from '../firebase/auth';


// Uncompleted To Do list "child"
export const addToDo = (newToDo, uEmail) => async dispatch => {
    var cleanEmail = uEmail.replace(/\./g, ',');
    UsersRef.child(cleanEmail).child("todos").push().set(newToDo);
};

export const deleteToDo = (ToDoID, uEmail) => async dispatch => {
    var cleanEmail = uEmail.replace(/\./g, ',');
    UsersRef.child(cleanEmail).child("todos").child(ToDoID).remove();
};

export const fetchToDos = (uEmail) => async dispatch => {
    var cleanEmail = uEmail.replace(/\./g, ',');
    UsersRef.child(cleanEmail).child("todos").on("value", snapshot => {
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};

// Completed To Do list "child"
export const addCompleteToDo = (completeToDo, uEmail) => async dispatch => {
    var cleanEmail = uEmail.replace(/\./g, ',');
    UsersRef.child(cleanEmail).child("completetodos").push().set(completeToDo);
};

export const deleteCompleteToDo = (ToDoID, uEmail) => async dispatch => {
    var cleanEmail = uEmail.replace(/\./g, ',');
    UsersRef.child(cleanEmail).child("completetodos").child(ToDoID).remove();
};

export const fetchCompletedToDos = (uEmail) => async dispatch => {
    var cleanEmail = uEmail.replace(/\./g, ',');
    UsersRef.child(cleanEmail).child("completetodos").on("value", snapshot => {
        dispatch({
            type: FETCH_COMPLETEDTODOS,
            payload: snapshot.val()
        });
    });
};

// delete all list
export const deleteAll = (uEmail) => async dispatch => {
    var cleanEmail = uEmail.replace(/\./g, ',');
    UsersRef.child(cleanEmail).child("todos").remove();
    UsersRef.child(cleanEmail).child("completetodos").remove();
};

// delete completed list
export const deleteAllCompleted = (uEmail) => async dispatch => {
    var cleanEmail = uEmail.replace(/\./g, ',');
    UsersRef.child(cleanEmail).child("completetodos").remove();
};