import React, { Component } from "react";
import Navigation from "../../../components/Navigation/Navigation";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import MostPopular from "./MostPopular/MostPopular";

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <header className="header">
                    <Navigation />
                    <div className="banner-container">
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
                    <div className="home-mostPopular-container">
                        <div className="home-grid-container__title__container">
                            <h2 className="home-grid-container__title">
                                Top Sellers
                            </h2>
                            <p className="home-grid-container__subTitle">
                                Shop tasty holiday gifts — from peppermint to
                                classic Milk Bar favorites.
                            </p>
                        </div>
                        {/* <i
                            id="home-icon-left"
                            className="fas fa-angle-left"
                        ></i>
                        <i
                            id="home-icon-right"
                            className="fas fa-angle-right"
                        ></i> */}
                        <div id="mostPopular__grid__container">
                            {this.props.data.map((item, index) => {
                                return (
                                    <MostPopular
                                        key={item.name + index}
                                        capitalize={this.props.capitalize}
                                        item={item}
                                    />
                                );
                            })}
                        </div>

                        {/* <button id="view-more-btn">View More</button> */}
                        <Link to="/products">
                            <button className="checkout-btn">View More</button>
                        </Link>
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
                    {/* <div className="social-grid-container">
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
                    </div> */}
                </main>
                <Footer />
            </div>
        );
    }
}

export default Home;
