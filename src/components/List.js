import React, { Component } from 'react';
import '../Reset.css';
import '../App.scss';
import { Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
import UncompletedList from './UncompletedList'
import CompletedList from './CompletedList'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        }// state done 
    }// constructor done 

    inputChange = e => {
        this.setState({ task: e.target.value });
    };

    formSubmit = e => {
        e.preventDefault();
        const { task } = this.state;
        const { addToDo } = this.props;
        addToDo({ title: task });
        this.setState({ task: "" });
    };

    renderForm() {
        return (
            <form onSubmit={this.formSubmit}>
                <button
                    className='button'
                    type='submit'
                    disabled={!this.state.task}
                >
                    <i className="fa fa-plus"></i>
                </button>
                <input
                    className='input'
                    type='text'
                    name='taskCont'
                    value={this.state.formValue}
                    onChange={this.inputChange}
                    id="toDoNext"
                    placeholder="New Task" />
            </form>
        );
    }

    render() {
        return (
            <Jumbotron>
                <div className='deleteBtn'>
                    {/* <p class="cBtn" onClick={} ><i className="fas fa-trash"></i>All</p> */}
                    <p className="cBtn"  ><i className="fas fa-trash"></i>All</p>
                    <p className="cBtn"  ><i className="fas fa-trash"></i>Completed Tasks</p>
                </div>
                <hr className="my-2" />
                {this.renderForm()}

                <UncompletedList />
                <hr className="my-2" />
                <p>Completed To Do:</p>
                <CompletedList />

            </Jumbotron>
        );
    }
}

export default connect(null, actions)(List);