import React, {useState, useContext} from 'react';
import Quantity from './Quantity';
import {CartContext} from '../context/CartContext';
import {ProductContext} from '../context/ProductContext';
import {Link} from 'react-router-dom';

const Details = () => {

    const [count, setCount] = useState(1);
    const cartContext = useContext(CartContext);
    const productContext = useContext(ProductContext);

    const { selectProduct } = cartContext;
    const { details } = productContext;


   return (
       <React.Fragment>
            {details.map(d => {
                const images = require(`../img/${d.img}`);
                return (
                    <div className="container" key={d.id}>
                        <div className="row">
                            <div className="img-container">
                                <img src={images} alt=""/>
                            </div>
                            <div className="details-container">
                                <div className="line"></div>
                                <h4 className="product-price">{d.price}</h4>
                                <h5 className="card-title">{d.name}</h5>
                                <p className="description">{d.description}</p>
                                <Quantity
                                    count={count}
                                    setCount={setCount}
                                />
                                <button className="checkout-btn" type="button" onClick={selectProduct(d.id)}>ADD TO CART<span>{count}</span></button>
                            </div>
                            <Link to={'/'} className='goBack'><i class="fas fa-arrow-left"></i></Link>
                        </div>
                    </div>
                )
            })}
       </React.Fragment>


   )
}

export default Details;