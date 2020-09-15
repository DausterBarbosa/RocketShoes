import React from "react";
import {BrowserRouter} from "react-router-dom";

import GlobalStyles from "./assets/styles/global";

import Header from "./components/header";

import Routes from "./routes";

function App(){
    return (
        <BrowserRouter>
            <GlobalStyles/>
            <Header/>
            <Routes/>
        </BrowserRouter>
    );
}

export default App;