import {all, call, fork, put} from 'redux-saga/effects';

import * as Actions from './actions';
import {getProducts} from '../../services/products';

function* fetchProducts() {
    try {
        const {data} = yield call(getProducts);
        yield put(Actions.fetchProductsSuccess(data));
    } catch (err) {
        yield put(Actions.fetchProductsError(err.response));
    }
}

export default function* rootSaga() {
    yield all([fork(fetchProducts)]);
}
