const Navigation = () => {
    return (
        <nav className="main-nav">
            <i id="main-nav__responsive__toggle" className="fas fa-bars"></i>
            <a className="main-nav__logo" href="/">
                <i className="fas fa-fan"> </i> Baked and Bubbly
                <i className="fas fa-fan"></i>
            </a>
            <div id="main-nav__link__container">
                <a className="main-nav__link" href="/">
                    Home
                </a>
                <a className="main-nav__link" href="/products/cupcake">
                    Products
                </a>
                <a className="main-nav__link" href="/contact">
                    Contact
                </a>
            </div>

            <a
                className="main-nav__cart"
                aria-label="Navigating Link"
                href="/cart"
            >
                <i className="fas fa-shopping-bag"></i>
            </a>
        </nav>
    );
};

export default Navigation;
