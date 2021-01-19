import React, { useEffect } from "react";
import Aux from "../../../../hoc/Aux/Aux";
import Navigation from "../../../../components/Navigation/Navigation";
import Footer from "../../../../components/Footer/Footer";
import { Link } from "react-router-dom";

const ProductReview = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Aux>
            <Navigation />
            <header className="product-header">
                <div className="product-dual-column">
                    <h2 className="product-grid-title">
                        {props.capitalize(props.product.name)}{" "}
                        {props.capitalize(props.product.type)}
                    </h2>
                </div>
                <div className="product-dual-column">
                    <h2 className="product-grid-title">
                        ${props.product.price}
                    </h2>
                </div>
            </header>
            <div className="cart-preview-dual-grid">
                <div className="cart-dual-column">
                    <div className="cart-image-container">
                        <img
                            src={props.product.image}
                            alt={props.product.name}
                            className="cart-image"
                        />
                    </div>
                </div>
                <div className="cart-dual-column">
                    <div className="cart-desc__container">
                        <div className="cart-desc">
                            <h3 className="cart-desc__container__body">
                                {props.capitalize(props.product.name)}{" "}
                                {props.capitalize(props.product.type)}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="cart-dual-column">
                    <div className="cart-desc__container">
                        <div className="cart-desc">
                            <h3 className="cart-desc__container__body">
                                Your Next Steps!
                            </h3>
                        </div>
                    </div>
                    <div className="cart-desc__container__links">
                        <Link to="/cart">
                            <button className="checkout-btn">Review Bag</button>
                        </Link>

                        <Link to="/products">
                            <button className="checkout-btn">
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </Aux>
    );
};

export default ProductReview;
