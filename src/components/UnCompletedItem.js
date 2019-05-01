import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteToDo, addCompleteToDo } from '../actions';

class UnCompletedItem extends Component {

    completeClick = (todoId, todo) => {
        const { addCompleteToDo, deleteToDo } = this.props;
        deleteToDo(todoId);
        var nowTime = new Date();
        addCompleteToDo({ deadline: nowTime.getTime() / 1000 | 0, task: todo.task, uEmail: todo.uEmail });
    };

    deleteClick = todoId => {
        const { deleteToDo } = this.props;
        deleteToDo(todoId);
    };

    render() {
        const { todoId, todo } = this.props;
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const date = new Date(todo.deadline * 1000);
        let formatted_date = `${months[date.getMonth()]} ${date.getDate()},${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

        return (
            <div className="item">
                <i className={"far fa-circle"} onClick={() => this.completeClick(todoId, todo)}></i>
                <i className="task-test">{todo.task}</i>
                <div className="rightButtons">
                    <i className="fas fa-times-circle" onClick={() => this.deleteClick(todoId)}></i>
                </div>
                <br />
                <i className="task-deadline">Due: {formatted_date}</i>
            </div>
        );

    }
}

export default connect(null, { deleteToDo, addCompleteToDo })(UnCompletedItem);
