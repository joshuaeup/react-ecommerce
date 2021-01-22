import React, { Component } from "react";

class Contact extends Component {
    state = {
        inputType: "feedback",
        active: true,
    };
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onChangeHandler = (e) => {
        this.setState(
            {
                inputType: e.target.value,
            },
            () => {
                console.log(this.state.inputType);
            }
        );
    };

    formSubmitHandler = (e) => {
        e.preventDefault();
        alert("Feature Coming Soon");
    };

    render() {
        return (
            <>
                <main id="padded-main">
                    <div className="two-grid-container">
                        <h2 className="contact-grid-container__title">
                            Contact Us
                        </h2>
                        <div className="contact-column">
                            <div className="contact-column__link__container">
                                <div className="input-radio contact-column__link">
                                    <label className="text__wrapper">
                                        Feedback
                                        <input
                                            required
                                            className="input"
                                            type="radio"
                                            name="form-input"
                                            value="feedback"
                                            checked={
                                                this.state.inputType ==
                                                    "feedback" && true
                                            }
                                            onChange={this.onChangeHandler}
                                        />
                                        <div className="radio-overlay"></div>
                                    </label>
                                </div>
                            </div>
                            <div className="contact-column__link__container">
                                <div className="input-radio contact-column__link">
                                    <label className="text__wrapper">
                                        General Inquiry
                                        <input
                                            required
                                            className="input"
                                            type="radio"
                                            name="form-input"
                                            value="general"
                                            checked={
                                                this.state.inputType ==
                                                    "general" && true
                                            }
                                            onChange={this.onChangeHandler}
                                        />
                                        <div className="radio-overlay"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="contact-column">
                            {this.state.inputType == "feedback" && (
                                <>
                                    <form onSubmit={this.formSubmitHandler}>
                                        <div className="input-container">
                                            <label
                                                className="input-container__label"
                                                htmlFor="fname"
                                            >
                                                First Name
                                            </label>
                                            <input
                                                required
                                                className="input-container__field"
                                                placeholder="First Name"
                                                id="fname"
                                                type="text"
                                            />
                                        </div>
                                        <div className="input-container">
                                            <label
                                                className="input-container__label"
                                                htmlFor="lname"
                                            >
                                                Last Name
                                            </label>
                                            <input
                                                required
                                                className="input-container__field"
                                                placeholder="Last Name"
                                                id="lname"
                                                type="text"
                                            />
                                        </div>
                                        <div className="input-container">
                                            <label
                                                className="input-container__label"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                required
                                                className="input-container__field"
                                                placeholder="Email Address"
                                                id="email"
                                                type="email"
                                            />
                                        </div>
                                        <div className="input-container">
                                            <label
                                                className="input-container__label"
                                                htmlFor="number"
                                            >
                                                Phone #
                                            </label>
                                            <input
                                                required
                                                className="input-container__field"
                                                placeholder="(555) 555 5555"
                                                id="number"
                                                type="number"
                                            />
                                        </div>
                                        <div className="input-container">
                                            <label
                                                className="input-container__label"
                                                htmlFor="comment"
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
                                    </form>
                                </>
                            )}
                            {this.state.inputType === "general" && (
                                <>
                                    <form onSubmit={this.formSubmitHandler}>
                                        <div className="input-container">
                                            <label
                                                className="input-container__label"
                                                htmlFor="fname"
                                            >
                                                First Name
                                            </label>
                                            <input
                                                required
                                                className="input-container__field"
                                                placeholder="First Name"
                                                id="fname"
                                                type="text"
                                            />
                                        </div>
                                        <div className="input-container">
                                            <label
                                                className="input-container__label"
                                                htmlFor="lname"
                                            >
                                                Last Name
                                            </label>
                                            <input
                                                required
                                                className="input-container__field"
                                                placeholder="Last Name"
                                                id="lname"
                                                type="text"
                                            />
                                        </div>
                                        <div className="input-container">
                                            <label
                                                className="input-container__label"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                required
                                                className="input-container__field"
                                                placeholder="Email Address"
                                                id="email"
                                                type="email"
                                            />
                                        </div>
                                        <div className="input-container">
                                            <label
                                                className="input-container__label"
                                                htmlFor="comment"
                                            >
                                                What's on your mind?
                                            </label>
                                            <textarea
                                                required
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
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export default Contact;
