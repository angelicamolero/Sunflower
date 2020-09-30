import React, {createContext, useState, useEffect} from 'react';
import { getFirestore } from '../firebase/index';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, addToCart] = useState([]);
    const [dataJson, setDataJson] = useState([]);
    const [count, setCount] = useState(1);

    const selectProduct = (prodID) => {
        const product = dataJson.filter(p => p.id === prodID)[0];
        product.quantity = 1
        if(!cart.find(item => item.id === product.id)){
            addToCart([
                ...cart,
                product //tambien puede ser ...product y borrar el [0]
            ]);
        }
    }

    const addMore = (prod) =>{
        if(cart[cart.findIndex(item => item.id === prod.id)].quantity >= cart[cart.findIndex(item => item.id === prod.id)].stock){
            alert(`You can't add more, there's only ${prod.stock} in stock`)
            cart[cart.findIndex(item => item.id === prod.id)].quantity = cart[cart.findIndex(item => item.id === prod.id)].stock
            return;
        }
        setCount(count + 1);
        if(cart[cart.findIndex(item => item.id === prod.id)].quantity === 0){
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

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        itemCollection.get().then((querySnapshot) => {
            setDataJson( querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))); 
        })
    }, [])

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