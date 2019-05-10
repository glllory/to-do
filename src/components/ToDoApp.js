import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../containers/Layout'
import SocialProfileList from './SocialProfileList';
import { auth } from '../firebase';
import List from './List';
import { Jumbotron, Button, Row, Col } from 'reactstrap';
import '../containers/App.scss';

class ToDoApp extends Component {
    static propTypes = {
        providerData: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    static defaultProps = {
        providerData: []
    };

    state = {
        providerData: this.props.providerData
    };

    componentWillMount() {
        console.log("yyyyyyyyyyyy componentWillMount")
    }
    componentDidMount = () => {
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
            <Layout>
                <Jumbotron>
                    <Row>
                        <Col ></Col>
                        <Col lg={6} className="text-center">
                        </Col>
                        <Col className="text-right"><Button size="sm" onClick={() => auth.getAuth().signOut()}> Sign Out </Button></Col>
                    </Row>

                    <SocialProfileList
                        auth={auth.getAuth}
                        providerData={this.state.providerData}
                    />

                    <List />
                </Jumbotron>
            </Layout>
        );
    }
}

export default ToDoApp;