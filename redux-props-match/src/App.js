import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, BrowserRouter, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import SignContainer from './containers/SignContainer';

function App() {
  return (
    <div>
      <Route path="/" component={MainContainer} exact={true}  />
      <Route path="/signin/:category" component={SignContainer} />
    </div>
  );
}

export default App;