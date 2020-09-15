import React from "react";

import {Link} from "react-router-dom";

import {MdShoppingBasket} from "react-icons/md";

import Logo from "../../assets/images/logo.svg";

import {HeaderContainer, Cart} from "./styles";

function Header(){
    return (
        <HeaderContainer>
            <Link to="/">
                <img src={Logo} alt="RocketShoes"/>
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>3 itens</span>
                </div>

                <MdShoppingBasket size={30} color="#FFF"/>
            </Cart>
        </HeaderContainer>
    );
}

export default Header;