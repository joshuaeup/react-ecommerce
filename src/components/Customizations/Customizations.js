import React, { Component } from "react";
import Customization from "./Customization/Customization";
import { Link } from "react-router-dom";
const customizations = [
    {
        type: "Icing Flavor",
        optionOne: "Vanilla",
        optionTwo: "Strawberry",
    },
    {
        type: "Collection Size",
        optionOne: "Half A Dozen",
        optionTwo: "A Dozen",
    },
    {
        type: "Filling Flavor",
        optionOne: "Strawberry",
        optionTwo: "Vanilla",
    },
];

class Customizations extends Component {
    state = {
        option0: "",
        option1: "",
        option2: "",
    };

    onChangeHandler = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value,
            },
            () => {
                console.log("_________________");
                console.log(this.state.option0);
                console.log(this.state.option1);
                console.log(this.state.option2);
            }
        );
    };

    render() {
        const route =
            "/products/" + this.props.type + "/" + this.props.name + "/review";
        return (
            <>
                {customizations.map((custom, index) => {
                    return (
                        <Customization
                            key={custom + index}
                            customizations={custom}
                            index={index}
                            onChange={this.onChangeHandler}
                        />
                    );
                })}
                <hr className="divideLine" />
                <div className="cart-add__container">
                    <Link to={route}>
                        <button
                            className="cart-add__btn"
                            onClick={() => this.props.submit(this.state)}
                        >
                            Add To Cart
                        </button>
                    </Link>
                </div>
            </>
        );
    }
}

export default Customizations;
