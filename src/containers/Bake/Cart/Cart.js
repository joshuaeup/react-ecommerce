import React, { Component } from "react";
import CartSummary from "./CartSummary/CartSummary";
import Navigation from "../../../components/Navigation/Navigation";
import Footer from "../../../components/Footer/Footer";
import CartItems from "./CartItems/CartItems";
import { Link } from "react-router-dom";

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: null,
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        // Find the sum of all within cart array
        let total = 0;
        for (let i = 0; i < this.props.items.length; i++) {
            total += this.props.items[i].price;
        }

        console.log("[CART]: ", this.props.configurations[0]);
        console.log("[CART]: ", this.props.configurations[1]);

        let layout;
        if (total <= 0) {
            layout = (
                <div
                    style={{
                        height: "50vh",
                        display: "grid",
                        alignItems: "center",
                    }}
                >
                    <header className="cart-header">
                        <div className="header-row">
                            <h2 className="header-title">
                                Your cart is empty.
                            </h2>
                        </div>
                        <div className="header-row">
                            <Link to="/products">
                                <button className="header-btn">
                                    Continue Shopping
                                </button>
                            </Link>
                        </div>
                    </header>
                </div>
            );
        } else {
            layout = (
                <div>
                    <header className="cart-header">
                        <div className="header-row">
                            <h2 className="header-title">
                                Your cart total is ${total}
                            </h2>
                        </div>
                        <div className="header-row">
                            <p className="header-subTitle">
                                Just a few clicks away!
                            </p>
                        </div>
                        <div className="header-row">
                            <button className="header-btn">Check Out</button>
                        </div>
                    </header>
                    <hr className="divideLine" />
                    <main id="main" className="product-main">
                        <CartItems
                            items={this.props.items}
                            configurations={this.props.configurations}
                            capitalize={this.props.capitalize}
                            removeFromCart={this.props.removeFromCart}
                        />
                        <hr className="divideLine" />
                        <CartSummary price={total} totalPrice={total} />
                    </main>
                </div>
            );
        }

        return (
            <div>
                <Navigation />
                {layout}
                <Footer />
            </div>
        );
    }
}

export default Cart;
