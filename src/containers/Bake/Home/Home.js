import React, { Component } from "react";
import testCupcake from "../../../assets/images/testCupcake.png";
import Footer from "../../../components/Footer/Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <nav className="main-nav">
                        <i
                            id="main-nav__responsive__toggle"
                            className="fas fa-bars"
                        ></i>
                        <a className="main-nav__logo" href="/">
                            <i className="fas fa-fan"> </i> Baked and Bubbly
                            <i className="fas fa-fan"></i>
                        </a>
                        <div id="main-nav__link__container">
                            <a className="main-nav__link" href="/">
                                Home
                            </a>
                            <div className="dropdown-nav__container main-nav__link">
                                <span>
                                    <a href="/">Products</a>
                                </span>
                                <ul id="dropdown">
                                    <li>
                                        <a href="/products/cupcake">Cupcakes</a>
                                    </li>
                                    <li>
                                        <a href="/products/pie">Pies</a>
                                    </li>
                                    <li>
                                        <a href="/products/cookie">Cookies</a>
                                    </li>
                                </ul>
                            </div>
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
                    <div className="banner-container">
                        {/* <div id="responsive-nav" style="display: none">
                            <input
                                className="responsive-nav__input"
                                type="text"
                                placeholder="Search freshstart.com"
                            />
                            <hr className="responsive-nav__bottomLine" />
                            <a
                                className="responsive-nav__link"
                                href="./index.html"
                            >
                                Home
                            </a>
                            <hr className="responsive-nav__link__bottomLine" />
                            <a
                                className="responsive-nav__link"
                                href="./collections/index.html"
                            >
                                Products
                            </a>
                            <hr className="responsive-nav__link__bottomLine" />
                            <a
                                className="responsive-nav__link"
                                href="./contact/index.html"
                            >
                                Contact
                            </a>
                        </div> */}
                        <div className="banner-contents">
                            <h1 id="bannerTitle">
                                <span id="left">Happiness</span>
                                <span id="right">Starts Here</span>
                            </h1>
                            <p id="bannerSubTitle">
                                Experience the best of baking with Baked and
                                Bubbly
                            </p>
                            <button type="button" id="btn">
                                Order Now
                            </button>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="five-grid-container">
                        <div className="home-grid-container__title__container">
                            <h2 className="home-grid-container__title">
                                Top Sellers
                            </h2>
                            <p className="home-grid-container__subTitle">
                                Shop tasty holiday gifts — from peppermint to
                                classic Milk Bar favorites.
                            </p>
                        </div>
                        <i
                            id="home-icon-left"
                            className="fas fa-angle-left"
                        ></i>
                        <i
                            id="home-icon-right"
                            className="fas fa-angle-right"
                        ></i>
                        <article className="home-grid-container__column">
                            <img
                                className="grid-item"
                                src={testCupcake}
                                alt="cupcake"
                            />
                            <h3 className="home-grid-container__column__title">
                                Dream Home
                            </h3>
                            <hr className="home-grid-container__column__bottomLine" />
                            <p className="home-grid-container__column__text">
                                When you undergo a home renovation you have the
                                opportunity
                            </p>
                        </article>
                        <article className="home-grid-container__column">
                            <img
                                className="grid-item"
                                src={testCupcake}
                                alt="cupcake"
                            />
                            <h3 className="home-grid-container__column__title">
                                Dream Home
                            </h3>
                            <hr className="home-grid-container__column__bottomLine" />
                            <p className="home-grid-container__column__text">
                                When you undergo a home renovation you have the
                                opportunity
                            </p>
                        </article>
                        <article className="home-grid-container__column">
                            <img
                                className="grid-item"
                                src={testCupcake}
                                alt="cupcake"
                            />
                            <h3 className="home-grid-container__column__title">
                                Dream Home
                            </h3>
                            <hr className="home-grid-container__column__bottomLine" />
                            <p className="home-grid-container__column__text">
                                When you undergo a home renovation you have the
                                opportunity
                            </p>
                        </article>
                        <article className="home-grid-container__column">
                            <img
                                className="grid-item"
                                src={testCupcake}
                                alt="cupcake"
                            />
                            <h3 className="home-grid-container__column__title">
                                Dream Home
                            </h3>
                            <hr className="home-grid-container__column__bottomLine" />
                            <p className="home-grid-container__column__text">
                                When you undergo a home renovation you have the
                                opportunity
                            </p>
                        </article>
                        <article className="home-grid-container__column">
                            <img
                                className="grid-item"
                                src={testCupcake}
                                alt="cupcake"
                            />
                            <h3 className="home-grid-container__column__title">
                                Dream Home
                            </h3>
                            <hr className="home-grid-container__column__bottomLine" />
                            <p className="home-grid-container__column__text">
                                When you undergo a home renovation you have the
                                opportunity
                            </p>
                        </article>
                        <button id="view-more-btn">View More</button>
                    </div>
                    <div className="info-grid-container">
                        <h2 className="home-grid-container__title">
                            How to order
                        </h2>
                        <article className="info-container__column">
                            <i className="fas fa-hand-holding-heart direction-icon"></i>
                            <h3 className="home-grid-container__column__title">
                                Choose your treats
                            </h3>
                            <hr className="home-grid-container__column__bottomLine" />
                            <p className="home-grid-container__column__text">
                                For gifting, for sharing, or keeping all to
                                yourself! We handcraft your treats fresh and to
                                order, then flash-freeze them for peak quality.
                            </p>
                        </article>
                        <article className="info-container__column">
                            <i className="fas fa-calendar-alt direction-icon"></i>
                            <h3 className="home-grid-container__column__title">
                                Schedule delivery
                            </h3>
                            <hr className="home-grid-container__column__bottomLine" />
                            <p className="home-grid-container__column__text">
                                Whether you’re a planner or a last-minute
                                gifter, you can schedule your delivery to ship 7
                                days a week, up to 30-days in advance.
                            </p>
                        </article>
                        <article className="info-container__column">
                            <i className="fas fa-smile-beam direction-icon"></i>
                            <h3 className="home-grid-container__column__title">
                                Get excited
                            </h3>
                            <hr className="home-grid-container__column__bottomLine" />
                            <p className="home-grid-container__column__text">
                                Sit back & relax while we cold-pack and ship
                                your treats to arrive just when you want them.
                                We’ll notify you every step of the way.
                            </p>
                        </article>
                    </div>
                    <div className="review-grid-container">
                        <h2 className="home-grid-container__title">
                            What our customers say
                        </h2>
                        <article className="review-grid-container__column">
                            <i
                                id="review-icon-left"
                                className="fas fa-angle-left"
                            ></i>
                            <i
                                id="review-icon-right"
                                className="fas fa-angle-right"
                            ></i>
                            <img
                                className="review-grid-photo"
                                src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
                                alt="cupcake"
                            />
                            <p className="review-grid-text">
                                <i className="fas fa-quote-left"></i> Lorem
                                ipsum dolor sit amet consectetur adipisicing
                                elit. Quae eligendi rem recusandae cupiditate
                                veritatis quas dolore? Animi, nisi quisquam
                                obcaecati, dolore molestiae blanditiis
                                distinctio, dicta veniam commodi ea non in.
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Ipsum commodi eos distinctio
                                modi laudantium. Amet, esse tempora non,
                                consectetur odit deleniti ullam ipsa natus, eos
                                blanditiis officiis praesentium voluptas?
                                Explicabo!
                                <i className="fas fa-quote-right"></i>
                            </p>
                        </article>
                    </div>
                    <div className="social-grid-container">
                        <h2 className="social-grid-container__title">
                            Check us out online
                        </h2>
                        <article className="social-grid-container__column">
                            <img
                                className="social-grid-photo"
                                src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
                                alt="cupcake"
                            />
                        </article>
                        <article className="social-grid-container__column">
                            <img
                                className="social-grid-photo"
                                src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
                                alt="cupcake"
                            />
                        </article>
                        <article className="social-grid-container__column">
                            <img
                                className="social-grid-photo"
                                src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
                                alt="cupcake"
                            />
                        </article>
                        <article className="social-grid-container__column">
                            <img
                                className="social-grid-photo"
                                src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
                                alt="cupcake"
                            />
                        </article>
                        <article className="social-grid-container__column">
                            <img
                                className="social-grid-photo"
                                src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
                                alt="cupcake"
                            />
                        </article>
                        <article className="social-grid-container__column">
                            <img
                                className="social-grid-photo"
                                src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
                                alt="cupcake"
                            />
                        </article>
                        <article className="social-grid-container__column">
                            <img
                                className="social-grid-photo"
                                src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
                                alt="cupcake"
                            />
                        </article>
                        <article className="social-grid-container__column">
                            <img
                                className="social-grid-photo"
                                src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
                                alt="cupcake"
                            />
                        </article>
                        <article className="social-grid-container__column">
                            <img
                                className="social-grid-photo"
                                src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
                                alt="cupcake"
                            />
                        </article>
                        <article className="social-grid-container__column">
                            <img
                                className="social-grid-photo"
                                src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
                                alt="cupcake"
                            />
                        </article>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Home;
