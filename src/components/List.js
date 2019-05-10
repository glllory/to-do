import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Calendarbox from './Calendar';
import UncompletedList from './UncompletedList'
import CompletedList from './CompletedList'
import { Row, Col } from 'reactstrap';
import { auth } from '../firebase';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            deadline: new Date()
        }
    }

    inputChange = e => {
        this.setState({ task: e.target.value });
    };

    dateChange = date => {
        this.setState({ deadline: date.date });
    }

    formSubmit = e => {
        e.preventDefault();
        const { task, deadline } = this.state;
        const { addToDo } = this.props;
        addToDo({ task, deadline: deadline.getTime() / 1000 | 0 }, auth.getAuth().currentUser.email);
        this.setState({ task: "", deadline: new Date() });
    };

    renderForm() {

        return (
            <form onSubmit={this.formSubmit}>
                <Row>
                    <Col xs={12} lg={6} md={6}>
                        <button
                            className='button'
                            type='submit'
                            disabled={!this.state.task}>
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
                    </Col>
                    <Col xs={12} lg={6} md={6}>
                        <button
                            className='button'
                            type='submit'
                            disabled={!this.state.task}>
                            <i className="fa fa-calendar-alt"></i>
                        </button>
                        <Calendarbox
                            dateChange={this.dateChange}
                            deadline={this.state.deadline}
                        />
                    </Col>
                </Row>
            </form>
        );
    }

    render() {
        return (
            <React.Fragment>
                <br />
                <div>
                    <p
                        className="cBtn"
                        onClick={() => this.props.deleteAll(auth.getAuth().currentUser.email)} >
                        <i className="fas fa-trash"></i>
                        All</p>

                    <p
                        className="cBtn"
                        onClick={() => this.props.deleteAllCompleted(auth.getAuth().currentUser.email)} >
                        <i className="fas fa-trash"></i>
                        Completed Tasks</p>

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