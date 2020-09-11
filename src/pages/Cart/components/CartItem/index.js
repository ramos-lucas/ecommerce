import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Thumbnail,
    QuantityInput,
    RemoveButton,
    QuantityContainer,
    Price,
    InputContainer,
    Cell,
    Label,
} from './styles';
import Button from '../../../../components/Button';
import {currencyFormatter} from '../../../../utils/currency';

const CartItem = ({
    image,
    name,
    price,
    id,
    quantity,
    totalAmount,
    onRemoveItemFromCart,
    onIncrementItemQuantity,
    onDecrementItemQuantity,
}) => {
    return (
        <Container>
            <Cell>
                <Thumbnail src={image} alt={name} />
            </Cell>
            <Cell>
                <Label>Produto</Label>
                <div>{name}</div>
            </Cell>
            <Cell>
                <Label>Quantidade</Label>
                <QuantityContainer>
                    <InputContainer>
                        <Button onClick={() => onDecrementItemQuantity(id)}>
                            -
                        </Button>
                        <QuantityInput
                            value={quantity}
                            type="number"
                            readOnly
                        />
                        <Button onClick={() => onIncrementItemQuantity(id)}>
                            +
                        </Button>
                    </InputContainer>
                    <RemoveButton onClick={() => onRemoveItemFromCart(id)}>
                        Remover
                    </RemoveButton>
                </QuantityContainer>
            </Cell>
            <Cell>
                <Label>Valor unit.</Label>
                <Price>{currencyFormatter(price)}</Price>
            </Cell>
            <Cell>
                <Label>Valor total</Label>
                <Price>{currencyFormatter(totalAmount)}</Price>
            </Cell>
        </Container>
    );
};

CartItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalAmount: PropTypes.number.isRequired,
    onRemoveItemFromCart: PropTypes.func.isRequired,
    onIncrementItemQuantity: PropTypes.func.isRequired,
    onDecrementItemQuantity: PropTypes.func.isRequired,
};

export default CartItem;
