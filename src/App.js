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
import Error from './components/Error';
import FormCheckout from './components/FormCheckout';
import Order from './components/Order';
/////////////////////////////////////////////////////////////////
import CartProvider from './context/CartContext';
import ProductProvider from './context/ProductContext';
import OrderProvider from './context/OrderContext';
////////////////////////////////////////////////////////////////

function App() {

  return (
    <ProductProvider>
      <CartProvider>
        <OrderProvider>
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
                  <Route exact path="/wish-list">
                    <WishList/>
                  </Route>
                  <Route exact path="/item/:id">
                    <Details/>
                  </Route>
                  <Route exact path="/contact">
                    <Contact/>
                  </Route>
                  <Route exact path="/formcheckout">
                    <FormCheckout/>
                  </Route>
                  <Route exact path="/order">
                    <Order/>
                  </Route>
                  <Route component={Error}/>
                </Switch>
              </div>
              <Footer/>
            </BrowserRouter>
          </div>
        </OrderProvider>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
