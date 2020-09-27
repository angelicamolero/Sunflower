import React, { useContext } from 'react';
import {v4 as uuidv4} from 'uuid';
import Quantity from './Quantity';
/////////////////////////////////////////////////////
import { CartContext } from '../context/CartContext';
/////////////////////////////////////////////////////

const CartDetail = () => {
    const cartContext = useContext(CartContext);

    const {cart, sumItems, deleteProduct, cleanCart} = cartContext

    return (
        <React.Fragment>
     
            {cart.length === 0 && (<h2>Cart is empty</h2>)}
            {cart.length !== 0 && 
                (<div className='row'>
                    <div className='col cartdiv'>
                    <h3 className="cart-title">Shopping Cart</h3>
                    <table className="table-responsive" key={`${uuidv4()}`}>
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                    {cart.map(item => {
                        const images = require(`../img/${item.img}`);
                        return (
                                <tbody key={item.id}>
                                    <tr>
                                        <td className="cart-image">
                                            <a href="!#">
                                                <img src={images} alt={item.name}/>
                                            </a>
                                        </td>
                                        <td className="product-name"> <h4>{item.name}</h4></td>
                                        <td className="product-price">{sumItems(item)}</td>
                                        <td className="cart-quantity"><Quantity prod={item}/></td>
                                        <td onClick={() => deleteProduct(item.id)}><i className="fas fa-trash"></i></td>
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