import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocialProfileList from './SocialProfileList';
import { auth } from '../firebase';
import List from './List';

class Dashboard extends Component {
    static propTypes = {
        providerData: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    static defaultProps = {
        providerData: []
    };

    state = {
        providerData: this.props.providerData
    };

    componentDidMount() {
        this.updateProviders(this.state.providerData);
    }

    componentWillUnmount = () => {
        this.updateProviders({ providerData: [] });
    }
    handleCurrentProviders = providerData => {
        this.updateProviders(providerData);
    };

    updateProviders = providerData => {
        this.setState({ providerData });
    };

    render() {
        return (
            <div>
                <h1>Secure Area</h1>
                <SocialProfileList
                    auth={auth.getAuth}
                    providerData={this.state.providerData}
                />
                <button
                    className=""
                    onClick={() => auth.getAuth().signOut()}
                >
                    Logout
                </button>
                <List />
            </div>
        );
    }
}

export default Dashboard;