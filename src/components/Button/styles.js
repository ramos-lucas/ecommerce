import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const commonCss = css`
    box-shadow: var(--panel-shadow);
    background-color: var(--color-green);
    color: var(--color-white);
    text-align: center;
    border-radius: 4px;
    font-size: 17px;
    font-weight: bold;
    padding: 8px 16px;
    cursor: pointer;

    &:hover,
    &:focus {
        filter: brightness(0.9);
    }
`;

export const ButtonContainer = styled.button`
    ${commonCss}
`;

export const LinkContainer = styled(Link)`
    ${commonCss}
    text-decoration: none;
`;
