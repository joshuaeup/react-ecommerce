import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
// Imported to allow routing
import { Route } from "react-router-dom";
// Containers
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";

class Bake extends Component {
    render() {
        return (
            <Aux>
                {/* Route used to specify what to render at each path */}
                <Route path="/" exact component={Home} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/products" exact component={Products} />
            </Aux>
        );
    }
}

export default Bake;
