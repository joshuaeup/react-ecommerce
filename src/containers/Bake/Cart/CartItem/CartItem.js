import React, { Component } from "react";

class CartItem extends Component {
    state = {
        // State variable to hold all customizations options for conditional
        customizations: [
            this.props.configurations.option0,
            this.props.configurations.option1,
            this.props.configurations.option2,
        ],
    };

    componentDidMount() {
        console.log(this.props.configurations.customizations[0].type);
    }
    remove = () => {
        this.props.removeFromCart(this.props.index);
    };

    render() {
        return (
            <div className="cart-dual-grid">
                <div className="cart-dual-column">
                    <div className="cart-image-container">
                        <img
                            src={this.props.image}
                            alt={this.props.name}
                            className="cart-image"
                        />
                    </div>
                </div>
                <div className="cart-dual-column">
                    <div className="cart-desc__container">
                        <div className="cart-desc">
                            <h3 className="cart-desc__container__body">
                                {this.props.name} {this.props.type}
                            </h3>
                            <h4 className="cart-desc__container__body__customize__title">
                                {this.state.customizations.join("") !== "" &&
                                    "Customizations"}
                            </h4>
                            <ul>
                                {this.props.configurations.option0 !== "" && (
                                    <li className="cart-desc__container__body__config">
                                        {
                                            this.props.configurations
                                                .customizations[0].type
                                        }
                                        :{" "}
                                        {this.props.configurations.option0.slice(
                                            0,
                                            -1
                                        )}
                                    </li>
                                )}

                                {this.props.configurations.option1 !== "" && (
                                    <li className="cart-desc__container__body__config">
                                        {
                                            this.props.configurations
                                                .customizations[1].type
                                        }
                                        :{" "}
                                        {this.props.configurations.option1.slice(
                                            0,
                                            -1
                                        )}
                                    </li>
                                )}
                                {this.props.configurations.option2 !== "" && (
                                    <li className="cart-desc__container__body__config">
                                        {
                                            this.props.configurations
                                                .customizations[2].type
                                        }
                                        :{" "}
                                        {this.props.configurations.option2.slice(
                                            0,
                                            -1
                                        )}
                                    </li>
                                )}
                            </ul>
                        </div>
                        {/* <div className="cart-desc">
                            <select
                                name="quantity"
                                id="quantity"
                                className="cart-desc__container__body"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div> */}
                        <div className="cart-desc">
                            <h3 className="cart-desc__container__body">
                                ${this.props.price}
                            </h3>
                            <button
                                className="cart-desc__container__btn"
                                onClick={this.remove}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                    <hr className="divideLine" />
                </div>
            </div>
        );
    }
}

export default CartItem;
