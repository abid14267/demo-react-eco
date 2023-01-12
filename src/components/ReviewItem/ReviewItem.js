import React from 'react';
import { removeFromDb } from '../../utilities/fakedb';
const ReviewItem = (props) => {
    const {name,quantity,id,price}=props.product;
    const reviewCartStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'

    }
    return (
        <div style={reviewCartStyle} className='review-item'>
            <h4 className='product-name'>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <br />
            <button 
            onClick={()=>props.handleRemoveProduct(id)}
            className='main-button'
            >Remove</button>
        </div>
    );
};

export default ReviewItem;