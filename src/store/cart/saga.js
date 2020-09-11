import {all, put, select, takeEvery, takeLatest} from 'redux-saga/effects';

import * as ProductTypes from '../products/types';
import * as Types from './types';
import * as Actions from './actions';
import {getCartItems} from './selectors';

const CART_KEY = '@ecommerce/cart';

function* retrieveCart() {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    yield put(Actions.retrieveCartItems(cart));
}

function* updateLocalCart() {
    const cartItems = yield select(getCartItems);
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
}

export default function* rootSaga() {
    yield all([
        takeEvery(
            [
                Types.ADD_TO_CART,
                Types.REMOVE_FROM_CART,
                Types.INCREMENT_QUANTITY,
                Types.DECREMENT_QUANTITY,
            ],
            updateLocalCart,
        ),
        takeLatest(ProductTypes.FETCH_PRODUCTS_SUCCESS, retrieveCart),
    ]);
}
