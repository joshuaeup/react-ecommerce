import React, { Component } from "react";
import data from "../../../data.json";
// Components
import Navigation from "../../../components/Navigation/Navigation";
import ProductsComponent from "../../../components/Products/Products";
import Footer from "../../../components/Footer/Footer";

class Products extends Component {
    state = {
        data: { ...data },
    };

    componentDidMount() {
        // fetch("data.json", {
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //     },
        // })
        //     .then((res) => res.json())
        //     .then((jsonRes) => {
        //         console.log(jsonRes);
        //     });
        console.log(this.state.data.cupcake);
    }

    render() {
        return (
            <div>
                <Navigation />
                <main id="padded-main">
                    <h2 className="home-grid-container__title">Products</h2>
                    <hr className="underline" />
                    <div id="six-grid-container">
                        {this.state.data.cupcake.map((cupcake, index) => {
                            return (
                                <ProductsComponent
                                    key={cupcake.name + index}
                                    {...cupcake}
                                />
                            );
                        })}
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Products;
