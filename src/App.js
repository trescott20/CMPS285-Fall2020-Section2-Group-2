import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import Header from './components/header/header.component';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        {/* Switch to Checkout Page */}
        <Route path = "/checkout">
          <h1>Checkout</h1>
        </Route>
        {/* Switch to Login Page */}
        <Route path="/login">
          <h1>Login Page</h1>
        </Route>
        {/* Default Page */}
        <Route path="/">
          <Header />
          <HomePage />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
