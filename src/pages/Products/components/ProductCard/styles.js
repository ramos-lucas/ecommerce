import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 8px;
    background-color: var(--color-white);
    color: var(--color-black);
    box-shadow: var(--panel-shadow);
    display: flex;
    flex-direction: column;
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

export const PriceContainer = styled.div`
    padding: 8px;
    flex-direction: column;
    display: flex;
    flex: 1;
    justify-content: flex-end;
`;

export const Price = styled.span`
    text-align: right;
`;

export const Title = styled.h3`
    padding: 8px;
`;
