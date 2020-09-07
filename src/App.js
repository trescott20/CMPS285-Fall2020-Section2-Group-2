import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path = "/checkout">
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h1>Login Page</h1>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
