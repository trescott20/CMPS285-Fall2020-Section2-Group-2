import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import Header from './components/header/header.component';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CheckOut from '../src/pages/checkout/checkout.component'
import ShopPage from '../src/pages/shop/shop.component';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>

        {/* Switch to Checkout Page */}
        <Route path = "/checkout">
          <Header />
          <CheckOut/>
        </Route>

        {/* Switch to Login Page */}
        <Route path="/login">
          <Header />
          <h1>Login Page</h1>
        </Route>

        {/* Default Page */}
        <Route exact path="/" >
          <Header />
          <HomePage />
        </Route>

        <Route path="/shop">
          <Header />
          <ShopPage />
        </Route>

        {/*--------------- Directory Pages ------------- */}

      </Switch>
    </div>
    </Router>
  );
}

export default App;
