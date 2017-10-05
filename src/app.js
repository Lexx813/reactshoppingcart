"use strict"
//REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
//IMPORT COMBINE REDUCERS
import reducers from './reducers/index';
//IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

//STEP 1 create the store
const middleWare = applyMiddleware(logger);
const store = createStore(reducers, middleWare);

import BooksList from './components/pages/BooksList';

render(
 <Provider store={store}>
 <BooksList/>
</Provider>, document.getElementById('app'));

// STEP 2create and dispatch actions
// store.dispatch(postBooks());

