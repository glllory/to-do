import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteToDo, addCompleteToDo } from '../actions';

class UnCompletedItem extends Component {

    completeClick = (todoId, todo) => {
        const { addCompleteToDo, deleteToDo, uEmail } = this.props;
        deleteToDo(todoId, uEmail);
        var nowTime = new Date();
        addCompleteToDo(
            { deadline: nowTime.getTime() / 1000 | 0, task: todo.task },
            uEmail
        );
    };

    deleteClick = todoId => {
        const { deleteToDo, uEmail } = this.props;
        deleteToDo(todoId, uEmail);
    };

    render() {
        const { todoId, todo, uEmail } = this.props;
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const date = new Date(todo.deadline * 1000);
        let formatted_date = `${months[date.getMonth()]} ${date.getDate()},${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

        return (
            <div className="item">
                <i className={"far fa-circle"} onClick={() => this.completeClick(todoId, todo, uEmail)}></i>
                <i className="task-test-uncom">{todo.task}</i>
                <div className="rightButtons">
                    <i className="fas fa-times-circle" onClick={() => this.deleteClick(todoId, uEmail)}></i>
                </div>
                <br />
                <i className="task-deadline">Due: {formatted_date}</i>
            </div>
        );

    }
}

export default connect(null, { deleteToDo, addCompleteToDo })(UnCompletedItem);
