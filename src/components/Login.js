import React, { Component } from 'react';
import Layout from '../containers/Layout';
import SocialButtonList from './SocialButtonList';
import { auth } from '../firebase';

const buttonList = {
    github: {
        visible: true,
        provider: () => {
            const provider = auth.githubOAuth();
            provider.addScope('user');
            return provider;
        }
    },
    facebook: {
        visible: true,
        provider: () => auth.facebookOAuth()
    },
    google: {
        visible: true,
        provider: () => auth.googleOAuth()
    },
    twitter: {
        visible: true,
        provider: () => auth.twitterOAuth()
    }
};

class Login extends Component {
    componentDidMount() {
        auth.getAuth().onAuthStateChanged(user => {
            if (user) {
                this.props.history.push('/dashboard');
            }
        });
    }

    render() {
        return (
            <Layout>
                <SocialButtonList buttonList={buttonList} auth={auth.getAuth} />
            </Layout>
        );
    }
}

export default Login;