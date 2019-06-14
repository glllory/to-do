import React, { Component } from 'react';
import moment from 'moment';
import Moment from 'react-moment';

class Header extends Component {

    getGreetingTime(m) {
        var g = null; //return g

        if (!m || !m.isValid()) { return; } //if we can't find a valid or filled moment, we return.

        var split_afternoon = 12 //24hr time to split the afternoon
        var split_evening = 17 //24hr time to split the evening
        var currentHour = parseFloat(m.format("HH"));

        if (currentHour >= split_afternoon && currentHour <= split_evening) {
            g = "Afternoon";
        } else if (currentHour >= split_evening) {
            g = "Evening";
        } else {
            g = "Morning";
        }

        return g;
    }

    render() {
        var user = this.props.displayName;

        if (user) {
            return (
                <div className="text-center">
                    <p className="greating username">{`Hi, ${user}`}</p>
                    <p className="todayTime">{"Good " + this.getGreetingTime(moment()) + ", "}It's <Moment format="ddd, D MMM YYYY, h:mm A" /> </p>
                </div>
            )
        } else {
            return null;
        }


    }
}

export default Header;