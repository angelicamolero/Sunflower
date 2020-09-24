import React from 'react';



const Quantity = ( { count,setCount} ) => {

    const addMore = () =>{
        setCount(count + 1)
        if(count === 10){
            alert('No mas de 10')
            setCount(10)
        }
    }
    const lessMore = () =>{
        setCount(count - 1)
        if(count === 1){
            alert('No menos de 1')
            setCount(1)
        }
    }
    return ( 
        <div className="quantity">
        <p className="qty">Qty</p>
        <span className="qty-span" onClick={lessMore}>-</span>
        <h3 className="qty-number">{count}</h3>
        <span className="qty-span" onClick={addMore}>+</span>
        </div>
     );
}

export default Quantity;