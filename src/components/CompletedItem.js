import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCompleteToDo, addToDo } from '../actions';
import { auth } from '../firebase';

class CompletedItem extends Component {

    unCompleteClick = (todoId, todo) => {
        const { deleteCompleteToDo, addToDo } = this.props;
        deleteCompleteToDo(todoId, auth.getAuth().currentUser.email);
        var nowTime = new Date();
        addToDo(
            { deadline: nowTime.getTime() / 1000 | 0, task: todo.task },
            auth.getAuth().currentUser.email
        );
    };

    deleteClick = todoId => {
        const { deleteCompleteToDo } = this.props;
        deleteCompleteToDo(todoId, auth.getAuth().currentUser.email);
    };

    render() {
        const { todoId, todo } = this.props;
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const date = new Date(todo.deadline * 1000);
        let formatted_date = `${months[date.getMonth()]} ${date.getDate()},${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

        return (
            <div className="item">
                <i className={"fas fa-check-circle"} onClick={() => this.unCompleteClick(todoId, todo)}></i>
                <i className="task-test">{todo.task}</i>
                <div className="rightButtons">
                    <i className="fas fa-times-circle" onClick={() => this.deleteClick(todoId)}></i>
                </div>
                <br />
                <i className="task-deadline">Completed on: {formatted_date}</i>
            </div>
        );
    }
}

export default connect(null, { deleteCompleteToDo, addToDo })(CompletedItem);
