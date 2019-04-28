import React, { Component } from 'react';
import '../containers/Reset.css';
import './header.css'
import moment from 'moment';

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

        if (user == null) {
            return (
                <div className="text-center">
                    <p>Be More Productive</p>
                    <p>&</p>
                    <p>Signin to create your to do list</p>
                </div>
            )
        } else {
            return (
                <div className="text-center">
                    <p className="greating">{"Good " + this.getGreetingTime(moment()) + ", " + user}</p>
                    <p className="todayTime">It's {moment().format('ddd, D MMM YYYY, h:mm A')}</p>
                </div>
            )
        }


    }
}

export default Header;