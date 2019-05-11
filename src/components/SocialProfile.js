import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { Row, Col } from 'reactstrap';

class SocialProfileList extends PureComponent {
    static propTypes = {
        providerData: PropTypes.arrayOf(PropTypes.object).isRequired,
    };

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col ></Col>
                    <Col lg={6} className="text-center">
                        <img
                            src={this.props.providerData[0].photoURL}
                            alt={this.props.providerData[0].providerName}
                            className="profile--photo"
                        />
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