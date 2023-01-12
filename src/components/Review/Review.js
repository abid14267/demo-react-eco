import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/products.json'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import placeOrderImg from '../../images/giphy.gif'
const Review = () => {
    const [cart,setCart]=useState([]);
    const [orderPlace,setOrderPlace]=useState(false);


    useEffect(() => {
        let shoppingCart;
        const storedCart = localStorage.getItem('shopping-cart');
        if(storedCart){
            shoppingCart = JSON.parse(storedCart);
        }
        const productKeys=Object.keys(shoppingCart);

        const cartProducts=productKeys.map(productKey => {
            const product=fakeData.find(product => product.id===productKey);
            product.quantity=shoppingCart[productKey];
            return product;
        });
        setCart(cartProducts);
    }, [])

    const handleRemoveProduct=(productKey)=>{
        const newCart=cart.filter(product => product.id!==productKey);
        removeFromDb(productKey)
        setCart(newCart);

    }

    const handlePlaceOrder=()=>{
        setCart([]);
        setOrderPlace(true);
        deleteShoppingCart();
    }

    const thankYou = <img src={placeOrderImg} />

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(pd=><ReviewItem 
                        key={pd.id}
                        handleRemoveProduct={handleRemoveProduct}
                        product={pd}></ReviewItem>)
                }
                {
                    orderPlace? thankYou:null
                }
            </div> 
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='main-button'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;