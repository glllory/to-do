import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const Layout = ({ children, contentCenter }) => {
    return (
        <div>
            <p>Layout Layout Layout</p>
            <main>{children}</main>
            <p>Layout Layout Layout</p>
        </div>
    );
};

Layout.propTypes = propTypes;

export default Layout;