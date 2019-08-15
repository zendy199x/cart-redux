import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';


const appReducers = combineReducers({
    products, //products :  products
    cart
});

export default appReducers;