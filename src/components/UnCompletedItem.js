import React, { Component } from 'react';
import '../Reset.css';
import '../App.scss';
import { connect } from 'react-redux';
import { deleteToDo, addCompleteToDo } from '../actions';

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
        return (
            <div key="toDoName">
                <div className="item">
                    <i className={"far fa-circle"} onClick={() => this.completeClick(todoId, todo)}></i>
                    {todo.title}
                    <div className="rightButtons">
                        <i className="fas fa-pencil-alt"></i>
                        <i className="fas fa-times-circle" onClick={() => this.deleteClick(todoId)}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { deleteToDo, addCompleteToDo })(UnCompletedItem);