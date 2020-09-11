import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';

import Header from './Header';
import {getCartLength} from '../../store/cart/selectors';

const HeaderContainer = () => {
    const {pathname} = useLocation();
    const cartLength = useSelector(getCartLength);

    const isHome = useMemo(() => pathname === '/', [pathname]);

    return <Header cartLength={cartLength} isHome={isHome} />;
};

export default HeaderContainer;
