import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//////////////////////////////////////////////////////////////////
import '../src/index.css';
/////////////////////////////////////////////////////////////////
import DiscountBar from './components/DiscountBar';
import LeftBar from './components/leftBar';
import Products from './components/Products';
import Cart from './components/Cart';
import WishList from './components/WishList';
import Contact from './components/Contact'
import Details from './components/Details';
import Footer from './components/footer';
import FormCheckout from './components/FormCheckout';
import Order from './components/Order';
/////////////////////////////////////////////////////////////////
import CartProvider from './context/CartContext';
import ProductProvider from './context/ProductContext';
////////////////////////////////////////////////////////////////

function App() {

  return (
    <ProductProvider>
      <CartProvider>
        <div className="container">
          <BrowserRouter>
            <DiscountBar/>
            <div className="row">
              <LeftBar/>
              <Switch>
                <Route exact path="/">
                  <Products/>
                </Route>
                <Route exact path="/cart">
                  <Cart/>
                </Route>
                <Route path="/wish-list">
                  <WishList/>
                </Route>
                <Route path="/item/:id">
                  <Details/>
                </Route>
                <Route path="/contact">
                  <Contact/>
                </Route>
                <Route path="/formcheckout">
                  <FormCheckout/>
                </Route>
                <Route path="/order">
                  <Order/>
                </Route>
              </Switch>
            </div>
            <Footer/>
          </BrowserRouter>
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
