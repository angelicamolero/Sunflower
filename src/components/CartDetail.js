import React, { useState, useContext } from 'react';
import {v4 as uuidv4} from 'uuid';
import Quantity from './Quantity';
/////////////////////////////////////////////////////
import { CartContext } from '../context/CartContext';
/////////////////////////////////////////////////////

const CartDetail = () => {
    const [count, setCount] = useState(1);
    const cartContext = useContext(CartContext);

    const {cart, deleteProduct, cleanCart} = cartContext


    return (
        <React.Fragment>
     
            {cart.length === 0 && (<h2>Cart is empty</h2>)}
            {cart.length !== 0 && 
                (<div className='row'>
                    <div className='col cartdiv'>
                    <h3 className="cart-title">Shopping Cart</h3>
                    <table class="table-responsive" key={`${uuidv4()}`}>
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                        </thead>
                    {cart.map(item => {
                        const images = require(`../img/${item.img}`);
                        return (
                                <tbody>
                            <tr>
                                <td class="cart-image">
                                <a href="">
                                    <img src={`./img/${item.img}`} alt=""/>
                                </a>
                                </td>
                                <td class="product-name"> <h4>{item.name}</h4></td>
                                <td class="product-price">{item.price}</td>
                                <td class="cart-quantity"><Quantity
                                        count={count}
                                        setCount={setCount}
                                    /></td>
                            </tr>
                            </tbody>
                        )
                        
                        
                    })}

                    </table>
                        <button onClick={() => cleanCart()}>Clean cart</button>
                    </div>
                </div>)}
        </React.Fragment>

        );
}
 
export default CartDetail;