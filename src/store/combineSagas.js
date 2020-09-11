import {all} from 'redux-saga/effects';

import cartSaga from './cart/saga';
import productsSaga from './products/saga';

export default function* rootSaga() {
    yield all([cartSaga(), productsSaga()]);
}
