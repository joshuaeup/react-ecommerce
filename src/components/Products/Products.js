import React, { Component } from "react";
// Imported to allow routing
import { Link } from "react-router-dom";

const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

class Products extends Component {
    render() {
        const route = "/products/" + this.props.type + "/" + this.props.name;

        // console.log(this.props);
        return (
            <>
                <Link to={route}>
                    <article className="product-grid-container__column">
                        <div className="product-grid-item-img">
                            <img
                                className="grid-img"
                                src={this.props.image}
                                alt={capitalize(this.props.type)}
                            />
                        </div>
                        <div className="product-grid-desc">
                            <div className="product-grid-item">
                                <p>
                                    {capitalize(this.props.name)}{" "}
                                    {capitalize(this.props.type)}
                                </p>
                            </div>
                            {/* <div className="product-grid-item">
                                <span>
                                    <i className="fas fa-star star-icon"></i>
                                    <i className="fas fa-star star-icon"></i>
                                    <i className="fas fa-star star-icon"></i>
                                    <i className="fas fa-star star-icon"></i>
                                    <i className="fas fa-star star-icon"></i>{" "}
                                    {this.props.reviews}
                                </span>
                            </div> */}
                            <div className="product-grid-item">
                                <span className="grid-price">
                                    ${this.props.price}
                                </span>
                            </div>
                        </div>
                    </article>
                </Link>
            </>
        );
    }
}

export default Products;
