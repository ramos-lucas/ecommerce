import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';
import {Title, Container, PriceContainer, Price} from './styles';
import {currencyFormatter} from '../../../../utils/currency';

const ProductCard = ({id, name, image, price, onAddProductToCart}) => (
    <Container>
        <img src={image} alt={name} />
        <Title>{name}</Title>
        <PriceContainer>
            <Price>{currencyFormatter(price)}</Price>
            <Button onClick={() => onAddProductToCart(id)}>
                Adicionar ao carrinho
            </Button>
        </PriceContainer>
    </Container>
);

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    onAddProductToCart: PropTypes.func.isRequired,
};

export default ProductCard;
