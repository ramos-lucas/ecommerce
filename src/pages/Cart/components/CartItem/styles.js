import styled from 'styled-components';

import Button from '../../../../components/Button';

export const Container = styled.div`
    margin-bottom: 10px;
    display: flex;
    list-style: none;
    width: 100%;
    box-shadow: var(--panel-shadow);
    background-color: var(--color-white);
    align-items: center;
    border-radius: 4px;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const Thumbnail = styled.img`
    height: 140px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    @media (max-width: 800px) {
        width: 100%;
        height: unset;
    }
`;

export const Price = styled.div`
    text-align: center;
    align-self: center;
`;

export const QuantityContainer = styled.div`
    align-items: center;
`;

export const InputContainer = styled.div`
    display: flex;
    box-shadow: var(--panel-shadow);
    border-radius: 4px;
    > button {
        box-shadow: none;
        :first-child {
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
        }
        :last-child {
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
        }
    }
`;

export const QuantityInput = styled.input`
    font-size: 14px;
    padding: 8px 16px;
    width: 100%;
    text-align: center;
`;

export const RemoveButton = styled(Button)`
    margin-top: 8px;
    width: 100%;
    background-color: var(--color-red);
`;

export const Cell = styled.div`
    flex: 1;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    :first-child {
        flex: unset;
    }
    @media (max-width: 800px) {
        margin-bottom: 16px;
    }
`;

export const Label = styled.label`
    font-size: 12px;
    color: var(--color-gray);
    margin-bottom: 4px;
`;
