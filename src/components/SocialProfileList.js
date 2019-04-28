import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { Row, Col, Card } from 'reactstrap';
import './header.css'

class SocialProfileList extends PureComponent {
    static propTypes = {
        auth: PropTypes.func.isRequired,
        providerData: PropTypes.arrayOf(PropTypes.object).isRequired,
    };

    renderProfileList = ({ providerId, photoURL, displayName }) => {
        const providerName = providerId.split('.')[0];

        return (
            <div key={providerName}>
                <img
                    src={photoURL}
                    alt={providerName}
                    className="profile--photo"
                />
            </div>
        );
    };

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col ></Col>
                    <Col lg={6} className="text-center">
                        {this.props.providerData.map(this.renderProfileList)}
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <Header displayName={this.props.providerData[0].displayName} />
                    </Col>
                </Row>

            </React.Fragment>
        );
    }
}

export default SocialProfileList;