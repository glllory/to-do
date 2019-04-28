import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import UncompletedList from './UncompletedList'
import CompletedList from './CompletedList'
import { Button, ButtonToolbar } from 'reactstrap';

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
                    value={this.state.task}
                    onChange={this.inputChange}
                    id="toDoNext"
                    placeholder="New Task" />
            </form>
        );
    }

    render() {
        return (
            <React.Fragment>
                <br />
                <div className='deleteBtn'>
                    <p className="cBtn" onClick={this.props.deleteAll} ><i className="fas fa-trash"></i>All</p>
                    <p className="cBtn" onClick={this.props.deleteAllCompleted} ><i className="fas fa-trash"></i>Completed Tasks</p>
                </div>
                <hr className="my-2" />
                {this.renderForm()}
                <hr className="my-2" />
                <br />
                <UncompletedList />
                <CompletedList />

            </React.Fragment>
        );
    }
}

export default connect(null, actions)(List);