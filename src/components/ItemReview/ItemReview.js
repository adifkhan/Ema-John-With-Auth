import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ItemReview.css'

const ItemReview = (props) => {
    const { product, removeItemFromCart } = props;
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='review-container'>
            <div className='review-product'>
                <img className='product-img' src={img} alt="" />
                <div className='order-details'>
                    <div>
                        <p title={name}>
                            {name.length > 20 ? name.slice(0, 25) + '...' : name}
                        </p>
                        <p>Price: <span>${price}</span></p>
                        <p><small> Quantity: <span>{quantity} pcs</span></small></p>
                        <p><small> Shipping Charge: <span>${shipping}</span></small></p>
                    </div>
                    <div>
                        <button className='delete-button' onClick={() => removeItemFromCart(product)}>
                            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ItemReview;