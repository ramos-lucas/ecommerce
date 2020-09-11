import * as Types from './types';
import buildIdsAndByIds from '../../utils/buildIdsAndById';

const INITIAL_STATE = {
    data: {
        ids: [],
        byId: {},
    },
    loading: true,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                data: buildIdsAndByIds(action.payload.products),
                loading: false,
            };
        case Types.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
};
