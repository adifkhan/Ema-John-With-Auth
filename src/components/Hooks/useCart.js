import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";

const useCart = (products) => {

    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const storedProducts = products.find(product => product.id === id);
            if (storedProducts) {
                const quantity = storedCart[id];
                storedProducts.quantity = quantity;
                savedCart.push(storedProducts);
            }
        }
        setCart(savedCart);
    }, [products]);
    return [cart, setCart];
}

export default useCart;