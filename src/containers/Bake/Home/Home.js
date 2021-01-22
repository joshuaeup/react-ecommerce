import React, { Component } from "react";
import { Link } from "react-router-dom";
import MostPopular from "./MostPopular/MostPopular";
import ImageSlider from "../../../components/ImageSlider/ImageSlider";
import { SliderData } from "../../../components/ImageSlider/SliderData";

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <header className="header">
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
                            <Link to="/products">
                                <button type="button" className="btn">
                                    Order Now
                                </button>
                            </Link>
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

                        <Link to="/products">
                            <button
                                className="btn"
                                style={{
                                    paddingTop: "0.8rem",
                                    paddingBottom: "0.8rem",
                                }}
                            >
                                View More
                            </button>
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
                        <ImageSlider slides={SliderData} />
                    </div>
                    {/* <div className="review-grid-container">
                        <ImageSlider slides={SliderData} />
                    </div> */}
                </main>
            </div>
        );
    }
}

export default Home;
