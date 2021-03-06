import React, { Component } from "react";
import { Link } from "react-router-dom";
// Components
import ProductsComponent from "../../../components/Products/Products";

class Products extends Component {
    state = {
        data: this.props.data.sort(this.compare),
        direction: "high",
        message: "",
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    compare = (a, b) => {
        const priceA = a.price;
        const priceB = b.price;

        let comparison = 0;

        if (this.state.direction === "low") {
            if (priceA > priceB) {
                comparison = 1;
            } else if (priceA < priceB) {
                comparison = -1;
            }
        } else {
            if (priceA < priceB) {
                comparison = 1;
            } else if (priceA > priceB) {
                comparison = -1;
            }
        }

        return comparison;
    };

    sortByPriceHandler = (direction) => {
        if (direction === "low") {
            this.setState(
                {
                    direction: "low",
                    message: "Low to High",
                },
                () => {
                    this.setState({
                        data: this.props.data.sort(this.compare),
                    });
                }
            );
        } else {
            this.setState(
                {
                    direction: "high",
                    message: "High to Low",
                },
                () => {
                    this.setState({
                        data: this.props.data.sort(this.compare),
                    });
                }
            );
        }
    };

    render() {
        return (
            <>
                <main id="main" style={{ paddingBottom: "0" }}>
                    <h2
                        className="home-grid-container__title"
                        style={{ backgroundColor: "white" }}
                    >
                        Products
                    </h2>
                    <hr
                        className="divideLine"
                        style={{ marginTop: "0", marginBottom: "0" }}
                    />
                    <div
                        id="products-sort-container"
                        style={{ backgroundColor: "white" }}
                    >
                        <p>{this.props.data.length} results found</p>
                        <div>
                            <div className="dropdown-nav__container main-nav__link">
                                <span>
                                    <p>
                                        Sort By Product Type:{" "}
                                        {this.props.type
                                            ? this.props.capitalize(
                                                  this.props.type
                                              )
                                            : null}{" "}
                                        <i className="fas fa-chevron-down"></i>
                                    </p>
                                </span>
                                <ul id="dropdown">
                                    <Link to="/products/cupcake">
                                        <li>Cupcakes</li>
                                    </Link>
                                    <Link to="/products/pie">
                                        <li>Pies</li>
                                    </Link>

                                    <Link to="/products/cookie">
                                        <li>Cookies</li>
                                    </Link>

                                    <Link to="/products/cheesecake">
                                        <li>Cheesecakes</li>
                                    </Link>
                                </ul>
                            </div>
                            <div className="dropdown-nav__container main-nav__link">
                                <span>
                                    <p>
                                        Sort By: Price: {this.state.message}{" "}
                                        <i className="fas fa-chevron-down"></i>
                                    </p>
                                </span>
                                <ul id="dropdown">
                                    <li
                                        onClick={() =>
                                            this.sortByPriceHandler("high")
                                        }
                                    >
                                        High to Low
                                    </li>
                                    <li
                                        onClick={() =>
                                            this.sortByPriceHandler("low")
                                        }
                                    >
                                        Low to High
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr
                        className="divideLine"
                        style={{ marginTop: "0", marginBottom: "0" }}
                    />
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
            </>
        );
    }
}

export default Products;
