import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import Auth from "./Auth";

const auth = new Auth();

let state = {};
window.setState = (changes) => {
state = Object.assign({}, state, changes);

ReactDOM.render(<App {...state}/>, document.getElementById('root'));
};

/* eslint no-restricted-globals:*/
let initialState ={
    location : location.pathname.replace(/^\/?|\/$/g, ""),
    auth : auth  
};
window.setState(initialState);
// ReactDOM.render(<TodoList />, document.getElementById('root'));
serviceWorker.unregister();
