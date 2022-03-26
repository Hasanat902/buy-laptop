import React from 'react';
import './Product.css';

const Product = (props) => {
    const{image, name, price} = props.product;
    return (
        <div className='product-container'>
            <img src={image} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <h4>Price: {price}</h4>
            </div>
            <button className='cart-btn'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;