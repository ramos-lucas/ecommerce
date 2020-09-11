import * as Types from './types';

const INITIAL_STATE = {
    items: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.RETRIEVE_CART_ITEMS:
            return {
                ...state,
                items: action.payload.items,
            };

        case Types.ADD_TO_CART: {
            const {productId} = action.payload;
            const productAlreadyOnCart = state.items.some(
                cartItem => cartItem.id === productId,
            );
            const newCartItens = productAlreadyOnCart
                ? state.items.map(cartItem =>
                      cartItem.id === productId
                          ? {...cartItem, quantity: cartItem.quantity + 1}
                          : cartItem,
                  )
                : [...state.items, {id: productId, quantity: 1}];
            return {
                ...state,
                items: newCartItens,
            };
        }

        case Types.INCREMENT_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.productId
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                          }
                        : item,
                ),
            };

        case Types.DECREMENT_QUANTITY:
            return {
                ...state,
                items: state.items
                    .map(item =>
                        item.id === action.payload.productId
                            ? {
                                  ...item,
                                  quantity: item.quantity - 1,
                              }
                            : item,
                    )
                    .filter(item => item.quantity > 0),
            };

        case Types.REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(
                    item => item.id !== action.payload.productId,
                ),
            };

        default:
            return state;
    }
};
