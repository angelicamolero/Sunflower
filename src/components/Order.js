import React from 'react'

const Order = () => {
    return(
<div class="container order-summary">
    <div class="row headline">
      <div class="eleven columns">
        <h3>Order Summary</h3>
      </div>
    </div>
    
    <div class="row">
      <div class="u-full-width eleven column order-info">
       <p><strong>Order Number:</strong> #120930923</p>
       <p><strong>Status:</strong> Delivered</p>
       <p><strong>Fecha:</strong> 20/09/2020</p>
       <p><strong>Name:</strong> Angelica Molero</p>
       <div class="order-emailphone">
         <p><strong>Email:</strong> angelicamolero@gmail.com</p>
         <p class="phone"><strong>Phone:</strong> 11 55867934</p>
       </div>
      </div>
    </div>
    
    <div class="row">
      <div class="eleven columns u-full-width">
        <table class="checkout-table">
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
                 <img src="https://www.ikea.com/gb/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_PE686835_S5.JPG" alt=""/>
              </td>
              <td>Heart-Leaf Philodendron</td>
              <td>1</td>
              <td>10.50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
     <div class="row">
       <div class="eleven columns total">
         <h4><strong>Total:</strong> $10.50</h4>
       </div>
     </div>
    
  </div>
    );
}

export default Order;