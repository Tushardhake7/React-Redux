import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import fruitsreducer from './reducers/fruitsreducer';
import fruitApp from './components/fruitApp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const masterReducer = combineReducers ({
    fruits: fruitsreducer, 
})

//const store = createStore(masterReducer, {fruits:'Alex'}, applyMiddleware(thunk));

const store = createStore(masterReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store= {store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
