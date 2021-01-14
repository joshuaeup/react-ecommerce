import React, { Component } from "react";
import CartItem from "./CartItem/CartItem";
import CartSummary from "./CartSummary/CartSummary";
import Navigation from "../../../components/Navigation/Navigation";
import Footer from "../../../components/Footer/Footer";

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    image:
                        "https://www.pngkey.com/png/full/167-1676383_strawberry-cupcake-by-bubupoodle-on-deviantart-cupcakes-with.png",
                    name: "Cupcake",
                    type: "cupcake",
                    price: 20.01,
                },
                {
                    image:
                        "https://www.pngkey.com/png/full/167-1676383_strawberry-cupcake-by-bubupoodle-on-deviantart-cupcakes-with.png",
                    name: "Cupcake",
                    type: "cupcake",
                    price: 20.01,
                },
                {
                    image:
                        "https://www.pngkey.com/png/full/167-1676383_strawberry-cupcake-by-bubupoodle-on-deviantart-cupcakes-with.png",
                    name: "Cupcake",
                    type: "cupcake",
                    price: 20.01,
                },
                {
                    image:
                        "https://www.pngkey.com/png/full/167-1676383_strawberry-cupcake-by-bubupoodle-on-deviantart-cupcakes-with.png",
                    name: "Cupcake",
                    type: "cupcake",
                    price: 20.01,
                },
            ],
            total: null,
        };
    }
    render() {
        // Find the sum of all within cart array
        let total = 0;
        for (let i = 0; i < this.state.items.length; i++) {
            total += this.state.items[i].price;
        }

        return (
            <div>
                <Navigation />
                <header className="cart-header">
                    <div className="header-row">
                        <h2 className="header-title">
                            Your cart total is {total}
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
                    {this.state.items.map((item, index) => {
                        return (
                            <CartItem
                                key={item.name + index}
                                image={item.image}
                                name={item.name}
                                type={item.type}
                                price={item.price}
                            />
                        );
                    })}
                    <hr className="divideLine" />
                    <CartSummary price={total} totalPrice={total} />
                </main>
                <Footer />
            </div>
        );
    }
}

export default Cart;
