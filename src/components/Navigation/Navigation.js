import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <i id="main-nav__responsive__toggle" className="fas fa-bars"></i>
            <Link className="main-nav__logo" to="/">
                <i className="fas fa-fan"> </i> Baked and Bubbly
                <i className="fas fa-fan"></i>
            </Link>
            <div id="main-nav__link__container">
                <Link className="main-nav__link" to="/">
                    Home
                </Link>
                <div className="dropdown-nav__container main-nav__link">
                    <span>
                        <Link className="main-nav__link" to="/products">
                            Products
                        </Link>
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
};

export default Navigation;
