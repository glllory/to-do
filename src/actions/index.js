import { UsersRef } from '../firebase/firebase'
import { FETCH_TODOS, FETCH_COMPLETEDTODOS } from './types'

const cleanEmail = (uEmail) => {
    return uEmail.replace(/\./g, ',');
}

// Uncompleted To Do list "child"
export const addToDo = (newToDo, uEmail) => async dispatch => {
    UsersRef.child(cleanEmail(uEmail)).child("todos").push().set(newToDo);
};

export const deleteToDo = (ToDoID, uEmail) => async dispatch => {
    UsersRef.child(cleanEmail(uEmail)).child("todos").child(ToDoID).remove();
};

export const fetchToDos = (uEmail) => async dispatch => {
    UsersRef.child(cleanEmail(uEmail)).child("todos").on("value", snapshot => {
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};

// Completed To Do list "child"
export const addCompleteToDo = (completeToDo, uEmail) => async dispatch => {
    UsersRef.child(cleanEmail(uEmail)).child("completetodos").push().set(completeToDo);
};

export const deleteCompleteToDo = (ToDoID, uEmail) => async dispatch => {
    UsersRef.child(cleanEmail(uEmail)).child("completetodos").child(ToDoID).remove();
};

export const fetchCompletedToDos = (uEmail) => async dispatch => {
    UsersRef.child(cleanEmail(uEmail)).child("completetodos").on("value", snapshot => {
        dispatch({
            type: FETCH_COMPLETEDTODOS,
            payload: snapshot.val()
        });
    });
};


// delete all list
export const deleteAll = (uEmail) => async dispatch => {
    UsersRef.child(cleanEmail(uEmail)).child("todos").remove();
    UsersRef.child(cleanEmail(uEmail)).child("completetodos").remove();
};

// delete completed list
export const deleteAllCompleted = (uEmail) => async dispatch => {
    UsersRef.child(cleanEmail(uEmail)).child("completetodos").remove();
};