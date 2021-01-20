import React from "react";
const CartSummary = (props) => {
    return (
        <div className="cart-total__container">
            <div className="cart-total__container__row">
                <div className="cart-total__container__row__column">
                    <p>Subtotal</p>
                </div>
                <div className="cart-total__container__row__column">
                    ${props.price}
                </div>
            </div>
            <div className="cart-total__container__row">
                <div className="cart-total__container__row__column">
                    <p>Shipping</p>
                </div>
                <div className="cart-total__container__row__column">
                    <p>FREE</p>
                </div>
            </div>
            <hr className="divideLine" />
            <div className="cart-total__container__row">
                <div className="cart-total__container__row__column">
                    <h3>Total</h3>
                </div>
                <div className="cart-total__container__row__column">
                    <h3>${props.totalPrice}</h3>
                </div>
            </div>
            <button className="checkout-btn" onClick={props.checkout}>
                Check Out
            </button>
        </div>
    );
};

export default CartSummary;
