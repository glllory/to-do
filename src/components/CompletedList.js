import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompletedToDos } from '../actions';
import _ from 'lodash';
import CompletedItem from './CompletedItem';

class CompletedList extends Component {

    componentWillMount() {
        this.props.fetchCompletedToDos();
    }

    render() {
        const { completedState } = this.props;
        const toDos = _.map(completedState, (value, key) => {
            return <CompletedItem key={key} todoId={key} todo={value} />;
        });
        if (!_.isEmpty(toDos)) {
            return toDos;
        }
        return (
            <div>
                <h4>you haven't done anything!</h4>
            </div>
        );
    }
}
const mapStateToProps = ({ completedState }) => {
    return {
        completedState
    }
}
export default connect(mapStateToProps, { fetchCompletedToDos })(CompletedList);
