export default data => {
    let byId = {};
    const ids = data.map(item => {
        byId[item.id] = item;
        return item.id;
    });
    return {ids, byId};
};
