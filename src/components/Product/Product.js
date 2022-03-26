import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {handleAddToCart, product} = props;
    const{image, name, price} = product;
    return (
        <div className='product-container'>
            <img src={image} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <h4>Price: {price}</h4>
            </div>
            <button onClick={() => handleAddToCart(product)} className='cart-btn'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;