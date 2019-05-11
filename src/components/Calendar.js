import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Calendarbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    handleChange = (date) => {
        if (date) {
            this.setState({ date });
        } else {
            this.setState({ date: new Date() });
        }
        this.props.dateChange({ date });
    }

    render() {
        return (
            <DatePicker
                selected={this.props.deadline}
                onChange={this.handleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
            />
        );
    }
}
export default Calendarbox;