import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import Product from '../product/Product';
import { Link } from 'react-router-dom';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useProducts();

    const [cart, setCart] = useCart(products);
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const isInCart = cart.find(product => product.id === selectedProduct.id);
        if (!isInCart) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const restProduct = cart.filter(product => product.id !== selectedProduct.id);
            isInCart.quantity = isInCart.quantity + 1;
            newCart = [...restProduct, isInCart];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="order-summery">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button className='btn-review'>Review Orders
                            <FontAwesomeIcon className='arrow-icon' icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;