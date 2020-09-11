import React from 'react';

import {Container} from './styles';

import Header from '../Header';

const Layout = ({children}) => (
    <Container>
        <Header />
        {children}
    </Container>
);

export default Layout;
