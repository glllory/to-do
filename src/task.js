import React, { Component } from 'react';
import './Reset.css';
import './App.scss';

class Task extends Component {

    render() {
        const className = `${this.props.task.completed ? "fas fa-check-circle" : "far fa-circle"}`;
        const isChecked = `${this.props.task.completed ? "check" : "uncheck"}`;

        return (
            <div className="item">
                <i className={className} onClick={this.props.handleClick}></i>
                <p className={isChecked} onClick={this.props.handleClick}>{this.props.task.taskCont}</p>
                <div className="rightButtons">
                    <i class="fas fa-pencil-alt" onClick={this.props.editTask}></i>
                    <i class="fas fa-times-circle" onClick={this.props.deleteTask} ></i>
                </div>
            </div>
        )

    }
}

export default Task;