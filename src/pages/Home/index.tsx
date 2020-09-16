import React, {useState, useEffect} from "react";

import Api from "../../services/api";

import {formatPrice} from "../../utils/format";

import {MdAddShoppingCart} from "react-icons/md";

import {ProductList} from "./styles";

interface ProductsTypes {
    id: number,
    title: string,
    price: number,
    image: string,
    priceFormatted?: string
}

function Home(){
    const [products, setProducts] = useState<ProductsTypes[]>([]);

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
        (console.log(products)),
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                <img
                    src={product.image}
                    alt={product.title}
                />
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
                <button>
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF"/>
                        <span>3</span>
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            ))}
        </ProductList>
    );
}

export default Home;