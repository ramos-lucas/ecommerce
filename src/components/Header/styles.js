import styled from 'styled-components';

export const Container = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0px;

    nav {
        position: relative;
    }

    a:not(:last-child) {
        margin-right: 8px;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        nav {
            margin-top: 32px;
        }
    }
`;
