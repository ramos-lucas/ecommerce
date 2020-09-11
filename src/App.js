import React from 'react';
import {Provider} from 'react-redux';

import GlobalStyles from './styles/GlobalStyles';
import Router from './routes';
import store from './store';

const App = () => (
    <>
        <Provider store={store}>
            <Router />
        </Provider>
        <GlobalStyles />
    </>
);

export default App;
