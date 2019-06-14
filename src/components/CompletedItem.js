import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCompleteToDo, addToDo } from '../actions';

class CompletedItem extends Component {

    unCompleteClick = (todoId, todo, uEmail) => {
        const { deleteCompleteToDo, addToDo } = this.props;
        deleteCompleteToDo(todoId, uEmail);
        var nowTime = new Date();
        addToDo(
            { deadline: nowTime.getTime() / 1000 | 0, task: todo.task },
            uEmail
        );
    };

    deleteClick = todoId => {
        const { deleteCompleteToDo, uEmail } = this.props;
        deleteCompleteToDo(todoId, uEmail);
    };

    render() {
        const { todoId, todo, uEmail } = this.props;
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const date = new Date(todo.deadline * 1000);
        let formatted_date = `${months[date.getMonth()]} ${date.getDate()},${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

        return (
            <div className="item">
                <i className={"fas fa-check-circle"} onClick={() => this.unCompleteClick(todoId, todo, uEmail)}></i>
                <i className="task-test-com">{todo.task}</i>
                <div className="rightButtons">
                    <i className="fas fa-times-circle" onClick={() => this.deleteClick(todoId, uEmail)}></i>
                </div>
                <br />
                <i className="task-deadline">Completed on: {formatted_date}</i>
            </div>
        );
    }
}

export default connect(null, { deleteCompleteToDo, addToDo })(CompletedItem);
