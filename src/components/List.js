import React, { Component } from 'react';
import '../Reset.css';
import '../App.scss';
import { Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import ListItem from './ListItem';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        }// state done 
    }// constructor done 

    inputChange = e => {
        console.log(e.target.value);
        this.setState({ task: e.target.value });
    };

    formSubmit = e => {
        e.preventDefault();
        const { task } = this.state;
        const { addToDo } = this.props;
        addToDo({ title: task });
        this.setState({ task: "" });
    };

    renderToDo() {
        const { data } = this.props;
        const toDos = _.map(data, (value, key) => {
            return <ListItem key={key} todoId={key} todo={value} />;
        });
        if (!_.isEmpty(toDos)) {
            return toDos;
        }
        return (
            <div>
                <h4>You have no more things ToDo!</h4>
            </div>
        );
    }

    componentWillMount() {
        this.props.fetchToDos();
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
                <div>
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

                </div>
                {this.renderToDo()}
            </Jumbotron>
        );
    }
}
const mapStateToProps = ({ data }) => {
    return {
        data
    }
}
export default connect(mapStateToProps, actions)(List);