import React from 'react';
import PropTypes from 'prop-types';

import {ButtonContainer, LinkContainer} from './styles';

const Button = ({children, to, onClick, ...rest}) => {
    if (to) {
        return (
            <LinkContainer to={to} {...rest}>
                {children}
            </LinkContainer>
        );
    }

    return (
        <ButtonContainer onClick={onClick} {...rest}>
            {children}
        </ButtonContainer>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    to: undefined,
    onClick: () => {},
};

export default Button;
