import React, { Component } from 'react';
import '../Reset.css';
import '../App.scss';
import { connect } from 'react-redux';
import { fetchToDos } from '../actions';
import _ from 'lodash';
import ListItem from './ListItem';

class UncompletedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }// state done 
    }// constructor done 


    componentWillMount() {
        this.props.fetchToDos();
    }

    render() {
        const { data } = this.props;
        console.log('hereee', data);
        const toDos = _.map(data, (value, key) => {
            console.log("value: " + value);
            console.log("key: " + key);
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
}

const mapStateToProps = ({ data }) => {
    return {
        data
    }
}
export default connect(mapStateToProps, { fetchToDos })(UncompletedList);
