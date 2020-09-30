import React, {useContext} from 'react';
import {OrderContext} from '../context/OrderContext';
import { CartContext } from '../context/CartContext';



const Order = () => {
    const cartContext = useContext(CartContext);
    const orderContext = useContext(OrderContext);

    const {cart} = cartContext

    const { orderSummary } = orderContext;
    const { name, phone, mail } = orderSummary;
    return(
    <div className="container order-summary">
    <div className="row headline">
      <div className="eleven columns">
        <h3>Order Summary</h3>
      </div>
    </div>
    
    <div className="row">
      <div className="u-full-width eleven column order-info">
       <p><strong>Order Number:</strong> #120930923</p>
       <p><strong>Status:</strong> Delivered</p>
       <p><strong>Fecha:</strong> {new Date().toDateString()}</p>
       <p><strong>Name:</strong> {name}</p>
       <div className="order-emailphone">
         <p><strong>Email:</strong> {mail}</p>
         <p className="phone"><strong>Phone:</strong>{phone}</p>
       </div>
      </div>
    </div>
    
    <div className="row">
      <div className="eleven columns u-full-width ">
        <table id="checkout-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                 <img className="order-img" src="https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG" alt=""/>
              </td>
              <td>Heart-Leaf Philodendron</td>
              <td>1</td>
              <td>10.50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
     <div className="row">
       <div className="eleven columns total">
         <h4><strong>Total:</strong> $10.50</h4>
       </div>
     </div>
    
  </div>
    );
}

export default Order;