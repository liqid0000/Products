import productListReducer from './reducers/productListReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    productList: productListReducer,       
});

