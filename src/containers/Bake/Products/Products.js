import React, { Component } from "react";
// Components
import Navigation from "../../../components/Navigation/Navigation";
import ProductsComponent from "../../../components/Products/Products";
import Footer from "../../../components/Footer/Footer";

class Products extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        // console.log(this.props.data.map);
        return (
            <div>
                <Navigation />
                <main id="padded-main">
                    <h2 className="home-grid-container__title">Products</h2>
                    <hr className="underline" />
                    <div id="six-grid-container">
                        {this.props.data.map((data, index) => {
                            return (
                                <ProductsComponent
                                    key={data.name + index}
                                    {...data}
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
