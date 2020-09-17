import React, {createContext, useState} from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    mount?: number;
}

interface ContextProps {
    cartItems: Array<Product>;
    addToCart(item:Product): void;
}

const CartContext = createContext<ContextProps>({} as ContextProps);

export const Cart:React.FC = ({children}) => {
    const [cartItems, setCartItems] = useState<Array<Product>>([]);

    function addToCart(item:Product){
        const product = cartItems.findIndex(product => product.id === item.id);

        if(product !== -1){
            cartItems[product].mount! += 1;

            setCartItems(cartItems);
        }else{
            setCartItems([...cartItems, {...item, mount: 1}]);
        }
    }   

    return (
        <CartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;