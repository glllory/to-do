import React, { Component } from 'react';
import '../containers/Reset.css';
import '../containers/App.scss';
import { connect } from 'react-redux';
import { deleteCompleteToDo, addToDo } from '../actions';

class CompletedItem extends Component {

    unCompleteClick = (todoId, todo) => {
        const { deleteCompleteToDo, addToDo } = this.props;
        deleteCompleteToDo(todoId);
        addToDo(todo);
    };

    deleteClick = todoId => {
        const { deleteCompleteToDo } = this.props;
        deleteCompleteToDo(todoId);
    };

    render() {
        const { todoId, todo } = this.props;
        return (
            <div key="toDoName">
                <div className="item">
                    <i className={"fas fa-check-circle"} onClick={() => this.unCompleteClick(todoId, todo)}></i>
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

export default connect(null, { deleteCompleteToDo, addToDo })(CompletedItem);