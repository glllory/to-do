import { todosRef } from '../firebase'
import { completetodosRef } from '../firebase'

const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_COMPLETEDTODOS = "FETCH_COMPLETEDTODOS";

// Uncompleted To Do list "child"
export const addToDo = newToDo => async dispatch => {
    todosRef.push().set(newToDo);
};
export const deleteToDo = ToDoID => async dispatch => {
    todosRef.child(ToDoID).remove();
};
export const fetchToDos = () => async dispatch => {
    todosRef.on("value", snapshot => {
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};

// Completed To Do list "child"
export const addCompleteToDo = completeToDo => async dispatch => {
    completetodosRef.push().set(completeToDo);
};
export const deleteCompleteToDo = ToDoID => async dispatch => {
    completetodosRef.child(ToDoID).remove();
};
export const fetchCompletedToDos = () => async dispatch => {
    completetodosRef.on("value", snapshot => {
        dispatch({
            type: FETCH_COMPLETEDTODOS,
            payload: snapshot.val()
        });
    });
};
