import styled from 'styled-components';

export const Grid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px 16px;
    list-style: none;
    li {
        display: inherit;
    }
`;
