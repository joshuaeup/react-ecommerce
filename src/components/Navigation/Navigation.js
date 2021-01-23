import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <nav className="main-nav">
                <i
                    onClick={this.props.toggle}
                    id="main-nav__responsive__toggle"
                    className="fas fa-bars"
                ></i>
                <Link className="main-nav__logo" to="/">
                    <i className="fas fa-fan"> </i> Baked and Bubbly{" "}
                    <i className="fas fa-fan"></i>
                </Link>
                <div id="main-nav__link__container">
                    <Link className="main-nav__link" to="/">
                        Home
                    </Link>
                    <div className="dropdown-nav__container main-nav__link">
                        <Link className="main-nav__link" to="/products">
                            <span>Products</span>
                        </Link>

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
                                <li>Cheesecake</li>
                            </Link>
                        </ul>
                    </div>

                    <Link className="main-nav__link" to="/contact">
                        Contact
                    </Link>
                </div>

                <Link
                    className="main-nav__cart"
                    aria-label="Navigating Link"
                    to="/cart"
                >
                    <i className="fas fa-shopping-bag"></i>
                </Link>
            </nav>
        );
    }
}

export default Navigation;
