import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
// Imported to allow routing
import { Route } from "react-router-dom";
// Containers
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";
import Product from "./Products/Product/Product";
import data from "../../data.json";

class Bake extends Component {
    state = {
        data: [...data.cupcake, ...data.cookie, ...data.pie],
    };

    // Method to find category and use param to find type
    findCategory = (type) => {
        // Find elements with matching category and name
        const products = this.state.data.filter((element) => {
            return String(element.type) === type;
        });

        // Log message and exit if error
        if (!products) {
            console.log("Product Not Found");
            return;
        }

        // Set Products Array to the deconstructed products return value
        const productsArr = [...products];

        // Return result
        return productsArr;
    };

    // Method to find product and use param to find type and name
    findProduct = (type, name) => {
        // Find element with matching type and name
        const product = this.state.data.find((element) => {
            return (
                String(element.type) === type && String(element.name) === name
            );
        });

        // Log message and exit if error
        if (!product) {
            console.log("Product Not Found");
            return;
        }

        // Return result
        return product;
    };

    // Method to capitalize words
    capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    render() {
        return (
            <Aux>
                {/* Route used to specify what to render at each path */}
                <Route path="/" exact component={Home} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/cart" exact component={Cart} />
                <Route
                    path="/products"
                    exact
                    render={() => <Products data={this.state.data} />}
                />
                <Route
                    path="/products/:type"
                    exact
                    render={(props) => (
                        <Products
                            data={this.findCategory(props.match.params.type)}
                            capitalize={this.capitalize}
                        />
                    )}
                />
                <Route
                    path="/products/:type/:name"
                    exact
                    render={(props) => (
                        <Product
                            product={this.findProduct(
                                props.match.params.type,
                                props.match.params.name
                            )}
                            capitalize={this.capitalize}
                        />
                    )}
                />
            </Aux>
        );
    }
}

export default Bake;
