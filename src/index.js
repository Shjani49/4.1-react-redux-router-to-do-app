import React from 'react';
//import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import { addNewToDo } from './actions/todos';
import toDoReducer from './reducers/todos';
import Nav from './components1/Nav';
import App from './components1/App';
import About from './components1/About';
import { createStore } from 'redux';
import {  Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from '@testing-library/react';

/**
 * Redux Store
 * Store is the full representation of our state. It is a complex object that
 * keeps track of the state data, and will help us operate on it using defined
 * reducers/actions.
 */
const store = createStore( toDoReducer );

// Attempt to output, see if we're getting an error.
store.subscribe( () => console.log( store.getState() ) ); // Outputs each time a change occurs (subscribe watches for changes.)

/**
 * Redux Dispatch
 * Dispatch is used for us to send commands for mutation/manipulation/reads from
 * our store/state data.
 */
store.dispatch( addNewToDo( "Buy milk." ) );
store.dispatch( addNewToDo( "Practice React." ) );
store.dispatch( addNewToDo( "Practice Redux." ) );
// Set up a "root" for our Router.
const Root = ( store ) => (
  <Provider store = {store.store}>
    <Router>
    <h1> About React/Redux/Router To-Do Application</h1>
      <Nav />
      <Route path = "/" component= {App} exact/>
      <Route path = "/about" component = {About} />

         </Router>
  </Provider>

);
Root.propTypes ={
  store: PropTypes.object.isRequired
}
// Render the route-enabled configuration.
render( 
  <Root store ={store} />, 
  document.getElementById( 'root' )
);