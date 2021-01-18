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
import ProductReview from "./Products/ProductReview/ProductReview";
// Data
import data from "../../data.json";
import topSellers from "../../topSellers.json";

const sweets = [...data.cupcake, ...data.cookie, ...data.pie];
const topSellingSweets = [...topSellers.topSellers];

class Bake extends Component {
    state = {
        data: sweets,
        topSellers: topSellingSweets,
        cart: [],
        configurations: [],
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

    addToCart = (newItem, config) => {
        // Create copy of cart array
        let cartCopy = [...this.state.cart, newItem];
        let configCopy = [...this.state.configurations, config];

        // Set cart state to copy
        this.setState(
            {
                cart: cartCopy,
                configurations: configCopy,
            },
            () => {
                console.log("[BAKE] ", this.state.cart);
                console.log("[BAKE CONFIG] ", this.state.configurations);
            }
        );
    };

    removeFromCart = (index) => {
        // Create copy of cart array
        let cartCopy = [...this.state.cart];
        // Remove item at index passed from cart component
        cartCopy.splice(index, 1);
        // Set cart state to copy
        this.setState({
            cart: cartCopy,
        });
    };

    // Method to capitalize words
    capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    render() {
        return (
            <Aux>
                {/* Route used to specify what to render at each path */}
                <Route
                    path="/"
                    exact
                    render={() => (
                        <Home
                            capitalize={this.capitalize}
                            data={this.state.topSellers}
                        />
                    )}
                />
                <Route path="/contact" exact component={Contact} />
                <Route
                    path="/cart"
                    exact
                    render={() => (
                        <Cart
                            capitalize={this.capitalize}
                            items={this.state.cart}
                            configurations={this.state.configurations}
                            removeFromCart={this.removeFromCart}
                        />
                    )}
                />
                <Route
                    path="/products/:type/:name/review"
                    exact
                    render={(props) => (
                        <ProductReview
                            capitalize={this.capitalize}
                            product={this.findProduct(
                                props.match.params.type,
                                props.match.params.name
                            )}
                        />
                    )}
                />
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
                            addToCart={this.addToCart}
                        />
                    )}
                />
            </Aux>
        );
    }
}

export default Bake;
