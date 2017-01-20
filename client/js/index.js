import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import CheeseList from './components/cheese-list';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers/cheese';

import {Provider} from 'react-redux';

const store = createStore(reducers.cheesesReducer,
  applyMiddleware(thunk));

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(
    <Provider store={store}>
    <CheeseList />
    </Provider>,
		document.getElementById('app')
	)
);

console.log(`Client running in ${process.env.NODE_ENV} mode`);


// document.addEventListener('DOMContentLoaded', () =>
//     ReactDOM.render(
//         <Provider store={store}>
//             <RepositoryList />
//         </Provider>,
//         document.getElementById('app')
//     )
// );
