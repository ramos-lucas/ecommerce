import React from 'react';
import PropTypes from 'prop-types';
import {BadgeCount} from './styles';

const Badge = ({children, count}) => {
    if (!count) return children;
    return (
        <>
            <BadgeCount>{count < 10 ? count : '9+'}</BadgeCount>
            {children}
        </>
    );
};

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    count: PropTypes.number.isRequired,
};

export default Badge;
