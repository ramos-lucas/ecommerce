import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Cart from './CartPage';
import * as Actions from '../../store/cart/actions';
import {getCartItems, getTotalAmount} from '../../store/cart/selectors';
import {getProductsLoading} from '../../store/products/selectors';

const CartContainer = () => {
    const dispatch = useDispatch();
    const items = useSelector(getCartItems);
    const totalAmount = useSelector(getTotalAmount);
    const loading = useSelector(getProductsLoading);

    const removeItemFromCart = useCallback(
        productId => dispatch(Actions.removeFromCart(productId)),
        [dispatch],
    );

    const incrementItemQuantity = useCallback(
        productId => dispatch(Actions.incrementQuantity(productId)),
        [dispatch],
    );

    const decrementItemQuantity = useCallback(
        productId => dispatch(Actions.decrementQuantity(productId)),
        [dispatch],
    );

    return (
        <Cart
            loading={loading}
            items={items}
            totalAmount={totalAmount}
            onRemoveItemFromCart={removeItemFromCart}
            onIncrementItemQuantity={incrementItemQuantity}
            onDecrementItemQuantity={decrementItemQuantity}
        />
    );
};

export default CartContainer;
