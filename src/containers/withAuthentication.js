import React, { Component } from 'react';
import Delay from 'react-delay';
import { auth } from '../firebase';

export default WrappedComponent => {
    class WithAuthentication extends Component {
        state = {
            providerData: []
        };

        componentDidMount() {
            auth.getAuth().onAuthStateChanged(user => {
                if (user) {
                    console.log("Umail from secure: ", user.email);
                    this.setState({ providerData: user.providerData });
                    console.info("providerData: ", user.providerData);

                } else {
                    console.info('Must be authenticated');
                    this.props.history.push('/');
                }
            });
        }

        render() {
            return this.state.providerData.length > 0 ? (
                <WrappedComponent
                    {...this.props}
                    providerData={this.state.providerData}
                />
            ) : (
                    <Delay wait={250}>
                        <p>Loading...</p>
                    </Delay>
                );
        }
    }

    return WithAuthentication;
};