import React from "react";

import {MdAddShoppingCart} from "react-icons/md";

import {ProductList} from "./styles";

function Home(){
    return (
        <ProductList>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1586961574&ims=326x"
                    alt="Tenis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$ 122,00</span>
                <button>
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF"/>
                        <span>3</span>
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1586961574&ims=326x"
                    alt="Tenis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$ 122,00</span>
                <button>
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF"/>
                        <span>3</span>
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1586961574&ims=326x"
                    alt="Tenis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$ 122,00</span>
                <button>
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF"/>
                        <span>3</span>
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1586961574&ims=326x"
                    alt="Tenis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$ 122,00</span>
                <button>
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF"/>
                        <span>3</span>
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1586961574&ims=326x"
                    alt="Tenis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$ 122,00</span>
                <button>
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF"/>
                        <span>3</span>
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1586961574&ims=326x"
                    alt="Tenis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$ 122,00</span>
                <button>
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF"/>
                        <span>3</span>
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    );
}

export default Home;