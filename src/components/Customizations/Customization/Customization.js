import React from "react";

const Customizations = (props) => {
    return (
        <div className="input-radio__container">
            <h2 className="input-radio__title">
                Choose Your {props.customizations.type}
            </h2>
            <div className="input-radio">
                <label className="text__wrapper">
                    {props.customizations.optionOne}
                    <input
                        className="input"
                        type="radio"
                        name={"option" + props.index}
                        value={props.customizations.optionOne + props.index}
                        onChange={props.onChange}
                    />
                    <div className="radio-overlay"></div>

                    <span className="text">Other Info</span>
                </label>
            </div>
            <div className="input-radio">
                <label className="text__wrapper">
                    {props.customizations.optionTwo}
                    <input
                        className="input"
                        type="radio"
                        name={"option" + props.index}
                        value={props.customizations.optionTwo + props.index}
                        onChange={props.onChange}
                    />
                    <div className="radio-overlay"></div>

                    <span className="text">Other Info</span>
                </label>
            </div>
        </div>
    );
};

export default Customizations;
