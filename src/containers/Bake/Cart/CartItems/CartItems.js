import React from "react";
import CartItem from "../CartItem/CartItem";

const randomNum = () => {
    return Math.floor(Math.random() * 100);
};

// console.log("Random Number", randomNum());

const CartItems = (props) => {
    return (
        <>
            {props.items.map((item, index) => {
                return (
                    <CartItem
                        key={item.name + randomNum()}
                        image={item.image}
                        name={props.capitalize(item.name)}
                        configurations={props.configurations[index]}
                        type={props.capitalize(item.type)}
                        price={item.price}
                        index={index}
                        removeFromCart={props.removeFromCart}
                    />
                );
            })}
        </>
    );
};

export default CartItems;
