import React, { Component } from "react";
import Footer from "../../../components/Footer/Footer";
import Navigation from "../../../components/Navigation/Navigation";

class Contact extends Component {
    render() {
        return (
            <>
                <Navigation />
                <main id="padded-main">
                    <div className="two-grid-container">
                        <h2 className="contact-grid-container__title">
                            Contact Us
                        </h2>
                        <div className="contact-column">
                            <div className="contact-column__link__container">
                                <a className="contact-column__link" href="/">
                                    Feedback
                                </a>
                                <a className="contact-column__link" href="/">
                                    General Inquiry
                                </a>
                            </div>
                        </div>
                        <div className="contact-column">
                            <div className="input-container">
                                <label
                                    className="input-container__label"
                                    for="fname"
                                >
                                    First Name
                                </label>
                                <input
                                    className="input-container__field"
                                    placeholder="First Name"
                                    id="fname"
                                    type="text"
                                />
                            </div>
                            <div className="input-container">
                                <label
                                    className="input-container__label"
                                    for="lname"
                                >
                                    Last Name
                                </label>
                                <input
                                    className="input-container__field"
                                    placeholder="Last Name"
                                    id="lname"
                                    type="text"
                                />
                            </div>
                            <div className="input-container">
                                <label
                                    className="input-container__label"
                                    for="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="input-container__field"
                                    placeholder="Email Address"
                                    id="email"
                                    type="email"
                                />
                            </div>
                            <div className="input-container">
                                <label
                                    className="input-container__label"
                                    for="number"
                                >
                                    Phone #
                                </label>
                                <input
                                    className="input-container__field"
                                    placeholder="(555) 555 5555"
                                    id="number"
                                    type="number"
                                />
                            </div>
                            <div className="input-container">
                                <label
                                    className="input-container__label"
                                    for="comment"
                                >
                                    What's on your mind?
                                </label>
                                <textarea
                                    className="input-container__field"
                                    placeholder="Comments"
                                    id="comment"
                                    type="text"
                                ></textarea>
                            </div>
                            <div className="input-container">
                                <input
                                    className="input-container__field"
                                    id="submit"
                                    type="submit"
                                    value="Submit"
                                />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }
}

export default Contact;