import React from "react";
import { Row, Col } from 'reactstrap';


const Footer = () => {
    return (
        <div >
            <Row className="justify-content-md-center footer">
                <Col xs lg="2"></Col>
                <Col md="auto">Made with<i className="fas fa-heart"></i></Col>
                <Col xs lg="2"></Col>
            </Row>
            <Row className="justify-content-md-center footer">
                <Col xs lg="2"></Col>
                <Col md="auto">
                    <a className="fb-ic" href="mailto:mjd.s.m@hotmail.com">
                        <i className="fas fa-envelope mr-3 concat-icon fa-2x">
                        </i>
                    </a>
                    <a className="tw-ic" href="https://github.com/glllory">
                        <i className="fab fa-github mr-3 concat-icon fa-2x">
                        </i>
                    </a>
                    <a className="gplus-ic" href="https://www.linkedin.com/in/glllory">
                        <i className="fab fa-linkedin mr-3  concat-icon fa-2x">
                        </i>
                    </a>

                </Col>
                <Col xs lg="2"></Col>
            </Row>

        </div>
    );
}

export default Footer;

