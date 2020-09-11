export const getProductList = state =>
    state.products.data.ids.map(id => state.products.data.byId[id]) || [];

export const getProductsLoading = state => state.products.loading;
