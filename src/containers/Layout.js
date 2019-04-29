import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import { Row, Col, Container } from 'reactstrap';
import '../containers/App.scss';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const Layout = ({ children }) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col lg={8}>
                        <main>{children}</main>
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

        </div>

    );
};

Layout.propTypes = propTypes;

export default Layout;