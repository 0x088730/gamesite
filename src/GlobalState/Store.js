import { configureStore } from '@reduxjs/toolkit';
import { rootReducer as reducer } from './reducers';

export const history = require('history').createBrowserHistory({forceRefresh:true});

const Store = configureStore({
    reducer,
    devTools: true
});

export const storeAppDispatch = Store.dispatch;
export default Store;
