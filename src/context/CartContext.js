import React, {createContext, useState} from 'react';

import dataJson from '../data.json';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, addToCart] = useState([]);
    const [count, setCount] = useState(1);
    

    const selectProduct = (prodID) => {
        const product = dataJson.filter(p => p.id === prodID)[0];
        
       
        if(!cart.find(item => item.id === product.id)){
            addToCart([
                ...cart,
                product //tambien puede ser ...product y borrar el [0]
            ]);
        }
    }

    const addMore = (prod) =>{
        setCount(count + 1);
        // (prod.quantity === undefined) ? prod.quantity = 1 : null;
        if(cart[cart.findIndex(item => item.id === prod.id)].quantity === undefined){
            prod.quantity = 1;
        } else{
            cart[cart.findIndex(item => item.id === prod.id)].quantity++
        }
        
        addToCart(cart);
    }

    const lessMore = (prod) =>{
        setCount(count - 1)
        if(cart[cart.findIndex(item => item.id === prod.id)].quantity === 1){
            alert('No menos de 1');
            setCount(1);
        } else {
            cart[cart.findIndex(item => item.id === prod.id)].quantity--
            addToCart(cart);
        }
    }

    const sumItems = item => {
        let total = [item].reduce((t, product) => t + product.price * product.quantity, 0).toFixed(2);
        return total
    }

    const deleteProduct = (prodId) => {
        const product = cart.filter(p => p.id !== prodId)
        addToCart(product);
    }

    const cleanCart = () => addToCart([]);

    return ( 
        <CartContext.Provider
            value={{
                cart,
                qty: cart.length,
                sumItems,
                selectProduct,
                addMore,
                lessMore,
                deleteProduct,
                cleanCart
            }}
        >
            {children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;