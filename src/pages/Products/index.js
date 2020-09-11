import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Products from './ProductsPage';
import {
    getProductList,
    getProductsLoading,
} from '../../store/products/selectors';
import * as Actions from '../../store/cart/actions';

const ProductsContainer = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProductList);
    const loading = useSelector(getProductsLoading);

    const addProductToCart = useCallback(
        productId => dispatch(Actions.addToCart(productId)),
        [dispatch],
    );

    return (
        <Products
            products={products}
            loading={loading}
            onAddProductToCart={addProductToCart}
        />
    );
};

export default ProductsContainer;
