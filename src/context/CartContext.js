import React, {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import dataJson from '../data.json';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, addToCart] = useState([])

    const selectProduct = (prodID) => {
        console.log(cart)
        const product = dataJson.filter(p => p.id === prodID)[0];
        addToCart([
            ...cart,
            product //tambien puede ser ...product y borrar el [0]
        ]); 
        
        console.log(cart)
    }
    const deleteProduct = (prodId) => {
        const product = cart.findIndex(p => p.id === prodId)
        addToCart(product);
    }

    const cleanCart = () => addToCart([])
    return ( 
        <CartContext.Provider
            value={{
                cart,
                qty: cart.length,
                selectProduct,
                deleteProduct,
                cleanCart
            }}
        >
            {children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;