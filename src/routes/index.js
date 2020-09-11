import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Layout from '../components/Layout';

import Products from '../pages/Products';
import Cart from '../pages/Cart';

const Router = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/" exact component={Products} />
                <Route path="/cart" component={Cart} />
                <Redirect to="/" />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default Router;
