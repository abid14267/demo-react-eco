import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/products.json'
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    // const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(fakeData);
    const [cart, setCart]=useState([])

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




    const handleAddProduct=(product)=>{
        const toBeAddedkey = product.key;
        const sameProduct=cart.find(pd=>pd.id===toBeAddedkey);
        let newCart;
        if(sameProduct){
            sameProduct.quantity=1+sameProduct.quantity
            const others = cart.filter(pd=>pd.id!==toBeAddedkey);
            newCart = [...others,sameProduct];
            
        }
        else{
            product.quantity=1;
            newCart = [...cart,product];
        }
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
            
                {
                    products.map(product=><Product 
                        key={product.id}
                        showAddtoCart={true}
                        product={product}
                        handleAddProduct={handleAddProduct}
                        ></Product>)
                }
            
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/review'>
                        <button className='main-button'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;