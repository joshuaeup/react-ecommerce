import React, { useState } from "react";
import { SliderData } from "./SliderData";

const ImageSlider = ({ slides }) => {
    // State variables and methods
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    // Method to increment current by 1 as long as value is below the max array amount
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    // Method to decrement current by 1 as long as value is above 0
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    // Make sure that array is exist and is not empty
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <>
            {" "}
            <i
                id="review-icon-left"
                className="fas fa-angle-left"
                onClick={nextSlide}
            ></i>
            <i
                id="review-icon-right"
                className="fas fa-angle-right"
                onClick={prevSlide}
            ></i>
            <section className="slider">
                {SliderData.map((slide, index) => {
                    return (
                        <div key={index}>
                            {index === current && (
                                <img
                                    src={slide.image}
                                    alt="placeholder"
                                    className="image"
                                />
                            )}
                        </div>
                    );
                })}
            </section>
        </>
    );
};

export default ImageSlider;
