import React, { Component } from 'react';
import Calendar from 'react-calendar';

class Calendarbox extends Component {

    state = {
        date: new Date(),
    }

    onChange = date => {
        this.setState({ date })
        console.log("dateYOU: ", date);
        this.props.dateChange({ date });
    }

    render() {
        console.log("fromPROPS: ", this.props.deadline);
        return (
            <div>
                <Calendar
                    onChange={this.onChange}
                    value={this.props.deadline}
                />
            </div>
        );
    }
}

export default Calendarbox;

