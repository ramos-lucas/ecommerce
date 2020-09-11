export const getCartLength = state =>
    state.cart.items.reduce((length, item) => length + item.quantity, 0);

export const getCartItems = state =>
    state.cart.items.map(item => ({
        ...item,
        ...state.products.data.byId[item.id],
        totalAmount:
            item.quantity * Number(state.products.data.byId[item.id].price),
    }));

export const getTotalAmount = state => {
    const cart = getCartItems(state);
    return cart.reduce((total, item) => total + item.totalAmount, 0);
};
