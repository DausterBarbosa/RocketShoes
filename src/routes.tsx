import React from "react";
import {Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";

function Routes(){
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Carrinho}/>
        </Switch>
    );
}

export default Routes;