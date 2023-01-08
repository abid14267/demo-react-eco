import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <br />
                <p>only {stock} left in stock - order soon</p>
                <button
                 className='main-button'
                 onClick={()=>props.handleAddProduct(props.product)}
                 ><FontAwesomeIcon icon={faCartShopping} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;