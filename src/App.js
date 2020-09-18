import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import Header from './components/header/header.component';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CheckOut from '../src/pages/checkout/checkout.component'
import ShopPage from '../src/pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      <Switch>

        {/* Switch to Checkout Page */}
        <Route path = "/checkout">
          <CheckOut/>
        </Route>

        {/* Switch to Login Page */}
        <Route path="/signin">
          <SignInAndSignUpPage />
        </Route>

        {/* Default Page */}
        <Route exact path="/" >
          <HomePage />
        </Route>

        <Route path="/shop">
          <ShopPage />
        </Route>

        {/*--------------- Directory Pages ------------- */}

      </Switch>
    </div>
    </Router>
  );
}

export default App;
