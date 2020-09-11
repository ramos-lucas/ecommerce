import * as Types from './types';

export const fetchProductsSuccess = products => ({
    type: Types.FETCH_PRODUCTS_SUCCESS,
    payload: {products},
});

export const fetchProductsError = error => ({
    type: Types.FETCH_PRODUCTS_ERROR,
    payload: {error},
});
