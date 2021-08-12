import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/chat">
              <Header backButton="/"/>
              <h1>I am the chat page</h1>
            </Route>
            <Route path="/">
              <Header />
              <TinderCards />
              <SwipeButtons />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
