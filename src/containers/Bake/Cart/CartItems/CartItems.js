import React from "react";
import Aux from "../../../../hoc/Aux/Aux";
import CartItem from "../CartItem/CartItem";

const CartItems = (props) => {
    return (
        <Aux>
            {props.items.map((item, index) => {
                return (
                    <CartItem
                        key={item.name + index}
                        image={item.image}
                        name={props.capitalize(item.name)}
                        configurations={props.configurations[index]}
                        type={props.capitalize(item.type)}
                        price={item.price}
                    />
                );
            })}
        </Aux>
    );
};

export default CartItems;
