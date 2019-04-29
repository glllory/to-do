import React from "react";
import { Row, Col } from 'reactstrap';


const Footer = () => {
    return (
        <div >
            <Row className="justify-content-md-center footer">
                <Col xs lg="2"></Col>
                <Col md="auto">Made with @</Col>
                <Col xs lg="2"></Col>
            </Row>
            <Row className="justify-content-md-center footer">
                <Col xs lg="2"></Col>
                <Col md="auto">
                    <a className="fb-ic" href="mailto:mjd.s.m@hotmail.com">
                        <i className="fas fa-envelope white-text  mr-3 fa-2x">
                        </i>
                    </a>
                    <a className="tw-ic" href="https://github.com/glllory">
                        <i className="fab fa-github white-text  mr-3 fa-2x">
                        </i>
                    </a>
                    <a className="gplus-ic" href="https://www.linkedin.com/in/glllory">
                        <i className="fab fa-linkedin  white-text  mr-3 fa-2x">
                        </i>
                    </a>

                </Col>
                <Col xs lg="2"></Col>
            </Row>

        </div>
    );
}

export default Footer;