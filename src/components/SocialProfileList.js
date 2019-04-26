import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import './SocialProfileList.css';

class SocialProfileList extends PureComponent {
    static propTypes = {
        auth: PropTypes.func.isRequired,
        providerData: PropTypes.arrayOf(PropTypes.object).isRequired,
    };

    renderProfileList = ({ providerId, photoURL, displayName }) => {
        const providerName = providerId.split('.')[0];

        return (
            <div className="container__profile" key={providerName}>
                <img
                    src={photoURL}
                    alt={providerName}
                    className="container__profile--photo"
                />
                <p>{displayName}</p>
            </div>
        );
    };

    render() {
        return (
            <Fragment>
                <div className="btn__profiles--list">
                    {this.props.providerData.map(this.renderProfileList)}
                </div>
            </Fragment>
        );
    }
}

export default SocialProfileList;