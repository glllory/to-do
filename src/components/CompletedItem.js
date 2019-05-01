import React, { Component } from 'react';
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
                <i className="task-deadline">due: {formatted_date}</i>
            </div>
        );
    }
}

export default connect(null, { deleteCompleteToDo, addToDo })(CompletedItem);

{/* <div className="item">
<Row>
    <Col xs={2} md={2} lg={2}>
        <i className={"fas fa-check-circle"} onClick={() => this.unCompleteClick(todoId, todo)}></i>
    </Col>
    <Col xs={8} md={8} lg={8}>
        <Row>
            <Col xs={12} md={12} lg={12}>
                <i>{todo.task}</i>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={12} lg={12}>
                <i>{todo.deadline}</i>
            </Col>
        </Row>
    </Col>
    <Col xs={2} md={2} lg={2}>
        <i className="fas fa-times-circle rightButtons" onClick={() => this.deleteClick(todoId)}></i>
    </Col>
</Row>
</div> */}