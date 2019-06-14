import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Jumbotron, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap-social.css';


const propTypes = {
    buttonList: PropTypes.shape({
        github: PropTypes.shape({
            provider: PropTypes.func.isRequired
        }),
        facebook: PropTypes.shape({
            provider: PropTypes.func.isRequired
        }),
        google: PropTypes.shape({
            provider: PropTypes.func.isRequired
        }),
        twitter: PropTypes.shape({
            provider: PropTypes.func.isRequired
        })
    }).isRequired,
    auth: PropTypes.func.isRequired,
};

const SocialButtonList = ({ history, buttonList, auth }) => {

    const authHandler = authData => {
        if (authData) {
            history.push('/todoapp');
        } else {
            console.error('Error authenticating');
        }
    };

    const authenticate = (e, provider) => {
        const providerOAuth = buttonList[provider].provider();
        auth()
            .signInWithPopup(providerOAuth)
            .then(authHandler)
            .catch(err => console.error(err));
    };

    const renderButtonList = provder => {
        if (!auth().currentUser) {
            return (
                <button
                    key={provder}
                    className={`btn btn-block btn-social btn-${provder} btn-lg`}
                    onClick={e => authenticate(e, provder)}
                >
                    <span className={`fab fa-${provder}`}></span>
                    Sign in with  {provder}
                </button>
            );

        }

    };

    return (
        <Jumbotron>
            <div className="text-center">
                <span className="greating">Be More Productive & start create your To Do List<br />Sign in with your ...</span>
            </div>
            <Row className="login-butten">
                <Col></Col>
                <Col lg={5}>
                    {Object.keys(buttonList).map(renderButtonList)}
                </Col>
                <Col></Col>
            </Row>
        </Jumbotron>
    );
};

SocialButtonList.propTypes = propTypes;

export default withRouter(SocialButtonList);
