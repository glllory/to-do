import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const Layout = ({ children, contentCenter }) => {
    return (
        <div>
            <main>{children}</main>
            <Footer />
        </div>
    );
};

Layout.propTypes = propTypes;

export default Layout;