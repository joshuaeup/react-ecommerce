import React, { Component } from "react";
import Aux from "../../../../hoc/Aux/Aux";
import Navigation from "../../../../components/Navigation/Navigation";
import Footer from "../../../../components/Footer/Footer";
import Customizations from "../../../../components/Customizations/Customizations";

class Product extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleSubmit = (config) => {
        console.log("PRODUCT.JS", this.props.product);
        // console.log("CONFIG", config);
        this.props.addToCart(this.props.product, config);
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
                            <Customizations submit={this.handleSubmit} />
                        </div>
                    </div>
                </main>
                <Footer />
            </Aux>
        );
    }
}

export default Product;
