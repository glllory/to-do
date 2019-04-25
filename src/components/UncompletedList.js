import React, { Component } from 'react';
import '../Reset.css';
import '../App.scss';
import { connect } from 'react-redux';
import { fetchToDos } from '../actions';
import _ from 'lodash';
import UnCompletedItem from './UnCompletedItem';

class UncompletedList extends Component {

    componentWillMount() {
        this.props.fetchToDos();
    }

    render() {
        const { uncompletedState } = this.props;
        const toDos = _.map(uncompletedState, (value, key) => {
            return <UnCompletedItem key={key} todoId={key} todo={value} />;
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
}

const mapStateToProps = ({ uncompletedState }) => {
    return {
        uncompletedState
    }
}
export default connect(mapStateToProps, { fetchToDos })(UncompletedList);
