import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 8px;
    background-color: var(--color-white);
    color: var(--color-black);
    box-shadow: var(--panel-shadow);

    img {
        width: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        object-fit: cover;
    }

    button {
        margin-top: 8px;
        width: 100%;
    }
`;

export const ProductInfo = styled.div`
    padding: 8px;
`;

export const Price = styled.span`
    float: right;
    margin-top: 8px;
`;
