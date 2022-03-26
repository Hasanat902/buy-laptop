import React, { useEffect, useState } from 'react';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className='products-container'>
            <div className="products-details">
                <h2>Below are product</h2>
            </div>
            <div className="products-cart">
                <h2>Selected Products</h2>
            </div>
        </div>
    );
};

export default Products;