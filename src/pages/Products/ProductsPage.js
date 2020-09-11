import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './components/ProductCard';
import {Grid} from './styles';

const Products = ({loading, products, onAddProductToCart}) => {
    if (loading) return <h3>Carregando...</h3>;

    return (
        <Grid>
            {products.map(item => (
                <ProductCard
                    key={item.id}
                    onAddProductToCart={onAddProductToCart}
                    {...item}
                />
            ))}
        </Grid>
    );
};

Products.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({id: PropTypes.string.isRequired}),
    ).isRequired,
    onAddProductToCart: PropTypes.func.isRequired,
    loading: PropTypes.bool,
};

Products.defaultProps = {
    loading: false,
};

export default Products;
