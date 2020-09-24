import React, { Fragment, useContext} from 'react';
import {Link} from 'react-router-dom';
////////////////////////////////////////////////////////
import {CartContext} from '../context/CartContext';
import {ProductContext} from '../context/ProductContext';
////////////////////////////////////////////////////////


const Product = () => {

    const cartContext = useContext(CartContext);
    const productContext = useContext(ProductContext);

    const { selectProduct } = cartContext;
    const { dataJson, viewMore } = productContext;

    return( 
        <Fragment>
            {dataJson.map(data => {
                const images = require(`../img/${data.img}`)
                return (
                    <div className="products-container" key={data.id}>
                        <div className="card">
                            <img className="card-img-top" src={images} alt=""/>
                            <div className="card-body">
                                <div className="add-to-cart" onClick={() => selectProduct(data.id)}>+ ADD TO CART</div>
                                <div className="first-line">
                                    <Link 
                                        to={`/item/${data.id}`} 
                                        style={{
                                            textDecoration:'none',
                                            color: '#131212'
                                        }} 
                                        onClick={() => viewMore(data.id)}
                                        ><h5 className="card-title">{data.name}</h5>
                                    </Link>
                                    <span className="wish-list"><i class="far fa-heart"></i></span>
                                </div>
                                <div className="line"></div>
                                <p className="product-price">{data.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Fragment>   
    );
}

export default Product;