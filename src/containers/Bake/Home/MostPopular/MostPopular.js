import React, { Component } from "react";
import { Link } from "react-router-dom";
import Aux from "../../../../hoc/Aux/Aux";

class MostPopular extends Component {
    render() {
        const route =
            "/products/" + this.props.item.type + "/" + this.props.item.name;

        return (
            <Aux>
                <Link to={route}>
                    <article className="product-grid-container__column">
                        <div className="product-grid-item-img">
                            <img
                                className="grid-img"
                                src={this.props.item.image}
                                alt={this.props.capitalize(
                                    this.props.item.type
                                )}
                            />
                        </div>
                        <div className="product-grid-desc">
                            <div className="product-grid-item">
                                <p>
                                    {this.props.capitalize(
                                        this.props.item.name
                                    )}{" "}
                                    {this.props.capitalize(
                                        this.props.item.type
                                    )}
                                </p>
                            </div>
                            {/* <div className="product-grid-item">
                        <span>
                            <i className="fas fa-star star-icon"></i>
                            <i className="fas fa-star star-icon"></i>
                            <i className="fas fa-star star-icon"></i>
                            <i className="fas fa-star star-icon"></i>
                            <i className="fas fa-star star-icon"></i>{" "}
                            {this.props.item.reviews}
                        </span>
                    </div> */}
                            <div className="product-grid-item">
                                <span className="grid-price">
                                    ${this.props.item.price}
                                </span>
                            </div>
                        </div>
                    </article>
                </Link>
            </Aux>
        );
    }
}

export default MostPopular;
