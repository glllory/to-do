import React, { Component } from 'react';
import Delay from 'react-delay';
import { Spinner, Row, Col, Container } from 'reactstrap';
import Footer from '../components/Footer';
import { auth } from '../firebase';
import '../containers/App.scss';

export default WrappedComponent => {
    class WithAuthentication extends Component {
        state = {
            providerData: [],
            uEmail: ""
        };

        componentDidMount = () => {
            auth.getAuth().onAuthStateChanged(user => {
                if (user) {

                    var providerId = user.providerData[0].providerId.split('.')[0];

                    if (providerId === "twitter" || providerId === "facebook") {
                        this.setState({
                            providerData: user.providerData,
                            uEmail: user.providerData[0].email
                        });
                    } else {
                        this.setState({
                            providerData: user.providerData,
                            uEmail: user.email
                        });
                    }

                } else {
                    console.info('Must be authenticated');
                    this.props.history.push('/');
                }
            });
        }

        componentWillUnmount = () => {
            this.setState({ providerData: [] });
        }

        render() {
            return this.state.providerData.length > 0 ? (
                <WrappedComponent
                    {...this.props}
                    providerData={this.state.providerData}
                    uEmail={this.state.uEmail}
                />
            ) : (
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col lg={8}>
                                <Delay wait={250}>
                                    <Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>
                                </Delay>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col lg={8}>
                                <Footer />
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                );
        }
    }

    return WithAuthentication;
};