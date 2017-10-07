"use strict"
//REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
//IMPORT COMBINE REDUCERS
import reducers from './reducers/index';
//IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

//STEP 1 create the store
const middleWare = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleWare);
//IMPORTED COMPONENTS
import BooksList from './components/pages/BooksList';
import Cart from './components/pages/Cart';
import BooksForm from './components/pages/BooksForm';
import Main from './main';

const Routes = (
 <Provider store={store}>
 <Router history={browserHistory}>
 <Route path="/" component={Main}>
 <IndexRoute
component={BooksList}/>
<Route path="/admin"
component={BooksForm}/>
 <Route path="/cart"
component={Cart}/>
 </Route>
 </Router>
 </Provider>
)

render(
 Routes, document.getElementById('app')
);
