import React, {useState, useEffect, useContext} from "react";

import CartContext from "../../Context/CartContext";

import Api from "../../services/api";

import {formatPrice} from "../../utils/format";

import {MdAddShoppingCart} from "react-icons/md";

import {ProductList} from "./styles";

interface ProductsTypes {
    id: number,
    title: string,
    price: number,
    image: string,
    priceFormatted: string
}

interface MountItems {
    [number:string]: number;
}

function Home(){
    const {addToCart, cartItems} = useContext(CartContext);

    const [products, setProducts] = useState<ProductsTypes[]>([]);
    const [mountItems, setMountItems] = useState<MountItems>({});

    useEffect(() => {
        function getMountsItems(){
            const mounts = cartItems.reduce((map, item) => ({
                ...map,
                [item.id]: item.mount
            }), {});
    
            setMountItems(mounts);
        }

        getMountsItems();
    }, [cartItems]);

    useEffect(() => {
        async function getProducts(){
            const response = await Api.get("/products");

            const data = response.data.map((product:ProductsTypes) => ({
                ...product,
                priceFormatted: formatPrice(product.price)
            }));

            setProducts(data);
        }

        getProducts();
    }, []);

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                <img
                    src={product.image}
                    alt={product.title}
                />
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
                <button type="button" onClick={() => addToCart(product)}>
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF"/>
                    <span>{mountItems[product.id] || 0}</span>
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            ))}
        </ProductList>
    );
}

export default Home;