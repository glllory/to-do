import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Calendarbox from './Calendar';
import UncompletedList from './UncompletedList'
import CompletedList from './CompletedList'
import { Row, Col, Button } from 'reactstrap';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            deadline: new Date(),
            uEmail: this.props.uEmail
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
        addToDo({
            task, deadline: deadline.getTime() / 1000 | 0
        },
            this.state.uEmail
        );
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
                <hr className="my-2" />
                {this.renderForm()}
                <hr className="my-2" />
                <Row>
                    <Col lg={6} className="text-center">
                    </Col>
                    <Col className="text-right">
                        <Button size="sm"
                            onClick={() => this.props.deleteAll(this.state.uEmail)}
                        >Delete All</Button>
                        <Button size="sm"
                            onClick={() => this.props.deleteAllCompleted(this.state.uEmail)}
                        >Delete Completed</Button>
                    </Col>
                </Row>
                <UncompletedList uEmail={this.state.uEmail} />
                <CompletedList uEmail={this.state.uEmail} />

            </React.Fragment >
        );
    }
}

export default connect(null, actions)(List);