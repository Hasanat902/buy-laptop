import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    const [carts, setCarts] = useState([]);

    const [randoms, setRandoms] = useState([]);

    useEffect( () => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...carts, product];
        setCarts(newCart);
    }

    const pickRandom = () => {
        const random = carts[Math.floor(Math.random() * carts.length)]
        setRandoms(random);
    }

    const handleReset = () => {
        const newCart = [];
        setCarts(newCart);
    }

    return (
        <div className='products-container'>
            <div className="products-details">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="products-cart">
                <h2>Selected Products</h2>
                <h3 className='selected-product'>{carts.map(cart => <h5>{cart.name}</h5>)}</h3>
                <button onClick={pickRandom} className='choose-random'>Choose 1 For Me</button>
                <br />
                <h3>{randoms.name}</h3>
                <button onClick={handleReset} className='reset-choose'>Reset</button>
            </div>
        </div>
    );
};

export default Products;