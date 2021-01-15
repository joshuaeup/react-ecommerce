import React, { Component } from "react";
import Aux from "../../../../hoc/Aux/Aux";
import Navigation from "../../../../components/Navigation/Navigation";
import Footer from "../../../../components/Footer/Footer";

class Product extends Component {
    componentDidMount() {}

    handleSubmit = () => {
        console.log("PRODUCT.JS", this.props.product);
        this.props.addToCart(this.props.product);
    };

    render() {
        return (
            <Aux>
                <Navigation />
                <header className="product-header">
                    <div className="product-dual-column">
                        <h2 className="product-grid-title">
                            {this.props.capitalize(this.props.product.name)}{" "}
                            {this.props.capitalize(this.props.product.type)}
                        </h2>
                    </div>
                    <div className="product-dual-column">
                        <h2 className="product-grid-title">
                            ${this.props.product.price}
                        </h2>
                    </div>
                </header>
                <main id="main" className="product-main">
                    <div className="product-dual-grid">
                        <div className="product-dual-column">
                            <div
                                id="product-image-sticky"
                                className="product-image-container"
                            >
                                <img
                                    src={this.props.product.image}
                                    alt={this.props.product.name}
                                    id="product-image"
                                />
                                {/* <div className="product-grid-item">
                                    <div className="four-grid-container">
                                        <img
                                            src={this.props.product.image}
                                            alt={this.props.product.name}
                                            id="product-image"
                                        />
                                        <img
                                            src={this.props.product.image}
                                            alt={this.props.product.name}
                                            id="product-image"
                                        />
                                        <img
                                            src={this.props.product.image}
                                            alt={this.props.product.name}
                                            id="product-image"
                                        />
                                        <img
                                            src={this.props.product.image}
                                            alt={this.props.product.name}
                                            id="product-image"
                                        />
                                    </div>
                                </div> */}
                                <hr className="divideLine" />
                            </div>
                        </div>
                        <div className="product-dual-column">
                            <div className="product-title__container">
                                <h2 className="product-title">
                                    Customize Your Dessert!
                                </h2>
                            </div>
                            <div className="input-radio__container">
                                <h2 className="input-radio__title">
                                    Choose your flavor
                                </h2>
                                <div className="input-radio">
                                    <span className="text__wrapper">
                                        <span className="text">Name</span>
                                        <span className="text">Other Info</span>
                                    </span>
                                </div>
                                <div className="input-radio">
                                    <span className="text__wrapper">
                                        <span className="text">Name</span>
                                        <span className="text">Other Info</span>
                                    </span>
                                </div>
                            </div>
                            <hr className="divideLine" />
                            <div className="input-radio__container">
                                <h2 className="input-radio__title">
                                    Choose your flavor
                                </h2>
                                <div className="input-radio">
                                    <span className="text__wrapper">
                                        <span className="text">Name</span>
                                        <span className="text">Other Info</span>
                                    </span>
                                </div>
                                <div className="input-radio">
                                    <span className="text__wrapper">
                                        <span className="text">Name</span>
                                        <span className="text">Other Info</span>
                                    </span>
                                </div>
                            </div>
                            <hr className="divideLine" />
                            <div className="input-radio__container">
                                <h2 className="input-radio__title">
                                    Choose your flavor
                                </h2>
                                <div className="input-radio">
                                    <span className="text__wrapper">
                                        <span className="text">Name</span>
                                        <span className="text">Other Info</span>
                                    </span>
                                </div>
                                <div className="input-radio">
                                    <span className="text__wrapper">
                                        <span className="text">Name</span>
                                        <span className="text">Other Info</span>
                                    </span>
                                </div>
                            </div>
                            <hr className="divideLine" />
                            <div className="input-radio__container">
                                <h2 className="input-radio__title">
                                    Choose your flavor
                                </h2>
                                <div className="input-radio">
                                    <span className="text__wrapper">
                                        <span className="text">Name</span>
                                        <span className="text">Other Info</span>
                                    </span>
                                </div>
                                <div className="input-radio">
                                    <span className="text__wrapper">
                                        <span className="text">Name</span>
                                        <span className="text">Other Info</span>
                                    </span>
                                </div>
                            </div>
                            <div className="cart-add__container">
                                <button
                                    className="cart-add__btn"
                                    onClick={this.handleSubmit}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </Aux>
        );
    }
}

export default Product;
