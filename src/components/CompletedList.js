import React, { Component } from 'react';
import '../Reset.css';
import '../App.scss';
import { connect } from 'react-redux';
import { fetchCompletedToDos } from '../actions';
import _ from 'lodash';
import ListItem from './ListItem';

class CompletedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }// state done 
    }// constructor done 

    componentWillMount() {
        this.props.fetchCompletedToDos();
    }

    render() {
        const { data } = this.props;
        const toDos = _.map(data, (value, key) => {
            return <ListItem key={key} todoId={key} todo={value} />;
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
const mapStateToProps = ({ data }) => {
    return {
        data
    }
}
export default connect(mapStateToProps, { fetchCompletedToDos })(CompletedList);
