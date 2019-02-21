import React, { Component } from 'react';
import './Reset.css';
import './App.scss';
import Task from './task';
import { Jumbotron } from 'reactstrap';

class TasksList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userInput: {
                id: '',
                taskCont: '',
                completed: false
            },
            toDoList: [
                {
                    id: 0,
                    taskCont: "read",
                    completed: false
                },
                {
                    id: 1,
                    taskCont: "sleap",
                    completed: false
                },
                {
                    id: 2,
                    taskCont: "eat",
                    completed: false
                },
                {
                    id: 3,
                    taskCont: "code",
                    completed: false
                }
            ],
            completedList: [],

        }// state done 
        // binds methods
        this.handleClick = this.handleClick.bind(this)
        this.addTask = this.addTask.bind(this)
        this.deleteTaskfromToDo = this.deleteTaskfromToDo.bind(this);
        this.deleteTaskfromComplet = this.deleteTaskfromComplet.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
        this.deleteAllCompletedTasks = this.deleteAllCompletedTasks.bind(this);
    }// constructor done here


    //Mthods here

    handleClick = (taskID, task) => {

        if (task.completed) {
            task.completed = !task.completed;
            console.log("hi");
            this.deleteTaskfromComplet(taskID);
            console.log("hi 222");
            this.state.toDoList.push(task);
        } else {
            task.completed = !task.completed;
            this.deleteTaskfromToDo(taskID);
            this.state.completedList.push(task)
        }

    };


    addTask = (event) => {
        const newData = event.target.value
        const originalState = this.state.userInput
        const copy = Object.assign({}, originalState);
        const key = event.target.name // 
        copy[key] = newData
        copy["id"] = this.state.toDoList.length
        this.setState({
            userInput: copy
        })
    }

    deleteTaskfromToDo = taskToHandle => {
        const update = this.state.toDoList.filter(task => task.id !== taskToHandle)
        this.setState({ toDoList: update })
    };

    deleteTaskfromComplet = taskToHandle => {
        const update = this.state.completedList.filter(task => task.id !== taskToHandle)
        this.setState({ completedList: update })
    };

    submitForm = (event) => {
        event.preventDefault()
        const copy = this.state.toDoList.slice(0)
        copy.push(this.state.userInput)
        this.setState({
            toDoList: copy,
            userInput: {
                taskCont: ''
            }
        })
    }
    deleteAll() {
        const update = []
        this.setState({ toDoList: update })
        this.setState({ completedList: update })
    }
    deleteAllCompletedTasks() {
        const update = []
        this.setState({ completedList: update })
    }

    render() {


        const tasks = this.state.toDoList.map(task => {
            return (
                <Task key={task.id} task={task} deleteTask={this.deleteTaskfromToDo.bind(this, task.id)} handleClick={this.handleClick.bind(this, task.id, task)} />
            )
        })

        const completedTasks = this.state.completedList.map(task => {
            return (
                <Task key={task.id} task={task} deleteTask={this.deleteTaskfromComplet.bind(this, task.id)} handleClick={this.handleClick.bind(this, task.id, task)} />
            )
        })

        return (
            <Jumbotron>
                <div className='deleteBtn'>
                    <p class="cBtn" onClick={this.deleteAll} ><i className="fas fa-trash"></i>All</p>
                    <p class="cBtn" onClick={this.deleteAllCompletedTasks} ><i className="fas fa-trash"></i>Completed Tasks</p>
                </div>
                <hr className="my-2" />
                <form onSubmit={this.submitForm}>
                    <button className='button' type='submit' disabled={!this.state.userInput.taskCont}><i className="fa fa-plus"></i></button>
                    <input className='input' type='text' name='taskCont' onChange={this.addTask} value={this.state.userInput.taskCont} placeholder="New Task" />
                </form>
                {tasks}
                <hr className="my-2" />
                <p className='rcap'>{this.state.completedList.length} completed Tasks</p>
                {completedTasks}
            </Jumbotron>
        );

    }


}
export default TasksList;

