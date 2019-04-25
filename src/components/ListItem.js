import React, { Component } from 'react';
import '../Reset.css';
import '../App.scss';
import { connect } from 'react-redux';
import { deleteToDo, addCompleteToDo } from '../actions';

class ListItem extends Component {

    completeClick = TodoId => {
        const { addCompleteToDo, deleteToDo } = this.props;
        addCompleteToDo(TodoId);
        deleteToDo(TodoId);
    };

    deleteClick = TodoId => {
        const { deleteToDo } = this.props;
        deleteToDo(TodoId);
    };

    render() {
        const { todoId, todo } = this.props;
        return (
            <div key="toDoName">
                <div className="item">
                    <i className={"far fa-circle"} onClick={() => this.completeClick(todoId)}></i>
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

export default connect(null, { deleteToDo, addCompleteToDo })(ListItem);