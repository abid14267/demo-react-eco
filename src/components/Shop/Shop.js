import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
    const [cart, setCart]=useState([])
    const handleAddProduct=(product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
            
                {
                    products.map(product=><Product 
                        product={product}
                        handleAddProduct={handleAddProduct}
                        ></Product>)
                }
            
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                {/* <p>Summery: {cart.length}</p> */}
            </div>
        </div>
    );
};

export default Shop;