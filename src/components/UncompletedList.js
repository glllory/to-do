import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchToDos } from '../actions';
import _ from 'lodash';
import UnCompletedItem from './UnCompletedItem';

class UncompletedList extends Component {

    componentWillMount() {
        this.props.fetchToDos(this.props.uEmail);
    }

    render() {
        const { uncompletedState, uEmail } = this.props;
        const toDos = _.map(uncompletedState, (value, key) => {
            return <UnCompletedItem key={key} todoId={key} todo={value} uEmail={uEmail} />;
        });
        if (!_.isEmpty(toDos)) {
            return (
                <div>
                    <p>Tasks </p>
                    {toDos}
                </div>
            );
        }
        return (
            <div>
                <p>Tasks: </p>
                <p className="todayTime">You have nothing to do !</p>
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
