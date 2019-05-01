import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteToDo, addCompleteToDo } from '../actions';
import { Row, Col, Container } from 'reactstrap';

class UnCompletedItem extends Component {

    completeClick = (todoId, todo) => {
        const { addCompleteToDo, deleteToDo } = this.props;
        deleteToDo(todoId);
        addCompleteToDo(todo);
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
                <i className="task-deadline">due: {formatted_date}</i>
            </div>
        );

    }
}

export default connect(null, { deleteToDo, addCompleteToDo })(UnCompletedItem);
