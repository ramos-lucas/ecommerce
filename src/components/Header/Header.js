import React from 'react';
import PropTypes from 'prop-types';

import {Container} from './styles';
import Button from '../Button';
import Badge from '../Badge';

const Header = ({cartLength, isHome}) => {
    return (
        <Container>
            <h1>Ramos</h1>
            <nav>
                {!isHome && <Button to="/">{'<< Voltar para lista'}</Button>}
                <Badge count={cartLength}>
                    <Button to="/cart">Carrinho</Button>
                </Badge>
            </nav>
        </Container>
    );
};

Header.propTypes = {
    cartLength: PropTypes.number.isRequired,
    isHome: PropTypes.bool.isRequired,
};

export default Header;
