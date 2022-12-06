import React from 'react';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import ItemReview from '../ItemReview/ItemReview';
import './Order.css'
import Cart from '../cart/Cart'
import { removeFromDb } from '../../utilities/fakedb';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Order = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const removeItemFromCart = product => {
        const remaining = cart.filter(item => item.id !== product.id);
        setCart(remaining);
        removeFromDb(product.id);
    }
    const navigate = useNavigate();
    return (
        <div className='cart-container'>
            <div className='cart-product'>
                {
                    cart.map(product => <ItemReview
                        key={product.id}
                        product={product}
                        removeItemFromCart={removeItemFromCart}
                    ></ItemReview>)
                }
            </div>
            <div className='cart-summery'>
                <Cart cart={cart}>
                    <button onClick={() => navigate('/shipping')} className='btn-review'>Proceed Shipping
                        <FontAwesomeIcon className='arrow-icon' icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Order;