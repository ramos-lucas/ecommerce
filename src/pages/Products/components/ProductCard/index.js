import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button';
import {Container, ProductInfo, Price} from './styles';
import {currencyFormatter} from '../../../../utils/currency';

const ProductCard = ({id, name, image, price, onAddProductToCart}) => (
    <Container>
        <img src={image} alt={name} />
        <ProductInfo>
            <h3>{name}</h3>
            <Price>{currencyFormatter(price)}</Price>
            <Button onClick={() => onAddProductToCart(id)}>
                Adicionar ao carrinho
            </Button>
        </ProductInfo>
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
