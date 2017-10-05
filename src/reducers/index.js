"use strict"
import {combineReducers} from 'redux';

//here import reducers to be combined
import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';

//HERE COMBINE REDUCERS
export default combineReducers({books: booksReducers, cart: cartReducers})
