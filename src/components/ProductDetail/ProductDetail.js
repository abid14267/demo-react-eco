import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/products.json'
import Product from '../Product/Product';
const ProductDetail = () => {
    const {productId}=useParams();
    const product=fakeData.find(pd=>pd.id===productId);
    
    return (
        <div>
            <Product showAddtoCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;