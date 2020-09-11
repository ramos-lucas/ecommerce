import axios from 'axios';

export const getProducts = () =>
    axios.get('https://5d6da1df777f670014036125.mockapi.io/api/v1/product');
