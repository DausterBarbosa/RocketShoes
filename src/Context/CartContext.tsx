import React, {createContext, useState} from "react";

import {toast} from "react-toastify";

import Api from "../services/api";

import {formatPrice} from "../utils/format";

interface Product {
    id: number;
    title: string;
    price: number;
    priceFormatted: string;
    image: string;
    mount?: number;
    subtotal?: string;
}

interface ContextProps {
    cartItems: Array<Product>;
    addToCart(item:Product): void;
    removeToCart(item:Product): void;
    deleteToCart(item:Product): void;
}

const CartContext = createContext<ContextProps>({} as ContextProps);

export const Cart:React.FC = ({children}) => {
    const [cartItems, setCartItems] = useState<Array<Product>>([]);

    async function addToCart(item:Product){
        const product = cartItems.findIndex(product => product.id === item.id);

        if(product !== -1){
            const {data} = await Api.get(`/stock/${item.id}`);

            if(cartItems[product].mount! + 1 > data.amount){
                toast.error("Quantidade solicitada fora de estoque.");
            }else{
                cartItems[product].mount! += 1;

                cartItems[product].subtotal = formatPrice(cartItems[product].mount! * cartItems[product].price);

                setCartItems([...cartItems]);
            }
        }else{
            const {data} = await Api.get(`/stock/${item.id}`);

            if(data.amount < 1){
                toast.error("Quantidade solicitada fora de estoque.");
            }else{
                const subtotal = formatPrice(item.price);

                setCartItems([...cartItems, {...item, mount: 1, subtotal}]);
            }
        }
    }

    function removeToCart(item:Product){
        const product = cartItems.findIndex(product => product.id === item.id);

        if(cartItems[product].mount !== 1){
            cartItems[product].mount! -= 1;

            cartItems[product].subtotal = formatPrice(cartItems[product].mount! * cartItems[product].price);

            setCartItems([...cartItems]);
        }
       
    }

    function deleteToCart(item:Product){
        const product = cartItems.findIndex(product => product.id === item.id);

        cartItems.splice(product, 1);
        
        setCartItems([...cartItems]);
    }

    return (
        <CartContext.Provider value={{cartItems, addToCart, removeToCart, deleteToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;