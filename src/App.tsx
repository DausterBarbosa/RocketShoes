import React from "react";
import {BrowserRouter} from "react-router-dom";

import {ToastContainer} from "react-toastify"

import {Cart} from "./Context/CartContext"

import GlobalStyles from "./assets/styles/global";

import Header from "./components/header";

import Routes from "./routes";

function App(){
    return (
        <BrowserRouter>
            <GlobalStyles/>
            <Cart>
                <ToastContainer autoClose={3000}/>
                <Header/>
                <Routes/>
            </Cart>
        </BrowserRouter>
    );
}

export default App;