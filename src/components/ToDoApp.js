import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../containers/Layout'
import SocialProfile from './SocialProfile';
import { auth } from '../firebase';
import List from './List';
import { Jumbotron, Button, Row, Col } from 'reactstrap';

class ToDoApp extends Component {
    static propTypes = {
        providerData: PropTypes.arrayOf(PropTypes.object).isRequired,
        uEmail: PropTypes.string.isRequired
    };

    static defaultProps = {
        providerData: [],
        uEmail: ""
    };

    state = {
        providerData: this.props.providerData,
        uEmail: this.props.uEmail
    };

    componentWillUnmount = () => {
        this.setState({ providerData: [], uEmail: "" });
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
                        uEmail={this.state.uEmail}
                    />

                    <List uEmail={this.state.uEmail} />
                </Jumbotron>
            </Layout>
        );
    }
}

export default ToDoApp;