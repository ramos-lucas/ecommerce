import styled from 'styled-components';

export const BadgeCount = styled.div`
    position: absolute;
    background-color: var(--color-red);
    right: -12px;
    top: -12px;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    box-shadow: var(--panel-shadow);
    color: var(--color-white);
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 12px;
    z-index: 1;
`;
