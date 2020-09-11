import React from 'react';
import PropTypes from 'prop-types';

import CartItem from './components/CartItem';
import {TotalAmount, Empty} from './styles';

import {currencyFormatter} from '../../utils/currency';

const Cart = ({
    loading,
    items,
    totalAmount,
    onRemoveItemFromCart,
    onIncrementItemQuantity,
    onDecrementItemQuantity,
}) => {
    if (loading) return <h3>Carregando...</h3>;

    if (!items.length)
        return (
            <Empty>
                <h3>Carrinho vazio :(</h3>
            </Empty>
        );

    return (
        <>
            <ul>
                {items.map(item => (
                    <CartItem
                        onIncrementItemQuantity={onIncrementItemQuantity}
                        onDecrementItemQuantity={onDecrementItemQuantity}
                        onRemoveItemFromCart={onRemoveItemFromCart}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
            <TotalAmount>
                <label>Valor total</label>
                <h3>{currencyFormatter(totalAmount)}</h3>
            </TotalAmount>
        </>
    );
};

Cart.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
        }),
    ).isRequired,
    totalAmount: PropTypes.number,
    loading: PropTypes.bool,
    onRemoveItemFromCart: PropTypes.func,
    onIncrementItemQuantity: PropTypes.func,
    onDecrementItemQuantity: PropTypes.func,
};

Cart.defaultProps = {
    totalAmount: 0,
    loading: false,
    onRemoveItemFromCart: () => {},
    onIncrementItemQuantity: () => {},
    onDecrementItemQuantity: () => {},
};

export default Cart;
