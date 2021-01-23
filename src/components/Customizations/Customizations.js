import React, { Component } from "react";
import Customization from "./Customization/Customization";
import { Link } from "react-router-dom";
const cupcakeCustomizations = [
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
];
const pieCustomizations = [
    {
        type: "Whipped Cream",
        optionOne: "Yes",
        optionTwo: "No",
    },
    {
        type: "Crust Type",
        optionOne: "Gram Cracker",
        optionTwo: "Classic",
    },
];

const cookieCustomizations = [
    {
        type: "Collection Size",
        optionOne: "Half A Dozen",
        optionTwo: "A Dozen",
    },
    {
        type: "Sprinkles",
        optionOne: "Yes",
        optionTwo: "No",
    },
];

const cheesecakeCustomizations = [
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
];

class Customizations extends Component {
    state = {
        option0: "",
        option1: "",
        option2: "",
        customizations: [],
    };

    componentDidMount() {
        if (this.props.type === "cupcake") {
            this.setState({
                customizations: cupcakeCustomizations,
            });
        } else if (this.props.type === "pie") {
            this.setState({
                customizations: pieCustomizations,
            });
        } else if (this.props.type === "cookie") {
            this.setState({
                customizations: cookieCustomizations,
            });
        } else if (this.props.type === "cheesecake") {
            this.setState({
                customizations: cheesecakeCustomizations,
            });
        }
    }

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

    updateCustomizationsArray = (customization) => {
        this.setState({
            customizations: customization,
        });
    };

    render() {
        const route =
            "/products/" + this.props.type + "/" + this.props.name + "/review";

        return (
            <>
                {this.state.customizations.map((custom, index) => {
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
