import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../containers/Layout'
import SocialProfile from './SocialProfile';
import { auth } from '../firebase';
import List from './List';
import { Jumbotron, Button, Row, Col } from 'reactstrap';

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

    componentWillUnmount = () => {
        this.setState({ providerData: [] });
    }

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

                    <SocialProfile
                        providerData={this.state.providerData}
                    />

                    <List />
                </Jumbotron>
            </Layout>
        );
    }
}

export default ToDoApp;