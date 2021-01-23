import React from "react";
import { Link } from "react-router-dom";

const SideNav = (props) => {
    // Set classes depending on state
    let attachedClasses = ["sideNav", "sideNav-close"];
    if (props.open) {
        attachedClasses = ["sideNav", "sideNav-open"];
    }

    return (
        <div className={attachedClasses.join(" ")}>
            <ul id="sideNav__list">
                <Link to="/">
                    <li onClick={props.close} className="sideNav__list__item">
                        Home
                    </li>
                </Link>
                <Link onClick={props.close} to="/products">
                    <li className="sideNav__list__item">All Products</li>
                </Link>
                <Link onClick={props.close} to="/products/cupcake">
                    <li className="sideNav__list__item">Cupcakes</li>
                </Link>
                <Link to="/products/pie">
                    <li onClick={props.close} className="sideNav__list__item">
                        Pies
                    </li>
                </Link>
                <Link to="/products/cookie">
                    <li onClick={props.close} className="sideNav__list__item">
                        Cookies
                    </li>
                </Link>
                <Link to="/products/cheesecake">
                    <li onClick={props.close} className="sideNav__list__item">
                        Cheesecake
                    </li>
                </Link>
                <Link to="/contact">
                    <li onClick={props.close} className="sideNav__list__item">
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default SideNav;
