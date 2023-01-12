import React, { Children } from 'react';

const Cart = (props) => {
    const cart=props.cart;
    // const totalPrice=cart.reduce((total,prd)=>total+prd.price,0)
    let productPrice=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        productPrice=productPrice+product.price * product.quantity;
    }
    let shipping=0;
    if(productPrice>400){
        shipping=0;
    }
    else if(productPrice>200){
        shipping=4.99;
    }
    else if(productPrice>0){
        shipping=12.99;
    }
    
    const formatNumber = num=>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const tax=formatNumber(productPrice/10);
    const groundTotal=formatNumber(productPrice+shipping+tax)
    
    return (
        <div>
            <h4>Order Summery : </h4>
            <p>Items ordered : {cart.length}</p>
            <p>Product Price : {formatNumber(productPrice)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + Vat :{tax}</small></p>
            <p>Total Price : {groundTotal}</p>
            <br />
            {props.children}
        </div>
    );
};

export default Cart;