const CartItem = (props) => {
    return (
        <div className="cart-dual-grid">
            <div className="cart-dual-column">
                <div className="cart-image-container">
                    <img
                        src={props.image}
                        alt={props.name}
                        className="cart-image"
                    />
                </div>
            </div>
            <div className="cart-dual-column">
                <div className="cart-desc__container">
                    <div className="cart-desc">
                        <h3 className="cart-desc__container__body">
                            {props.name} {props.type}
                        </h3>
                        <h4 className="cart-desc__container__body__customize__title">
                            Customizations
                        </h4>
                        <ul>
                            <li className="cart-desc__container__body__config">
                                Icing Flavor:{" "}
                                {props.configurations.option0.slice(0, -1)}
                            </li>
                            <li className="cart-desc__container__body__config">
                                Collection Size:{" "}
                                {props.configurations.option1.slice(0, -1)}
                            </li>
                            <li className="cart-desc__container__body__config">
                                Filling Flavor:{" "}
                                {props.configurations.option2.slice(0, -1)}
                            </li>
                        </ul>
                    </div>
                    <div className="cart-desc">
                        <select
                            name="quantity"
                            id="quantity"
                            className="cart-desc__container__body"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="cart-desc">
                        <h3 className="cart-desc__container__body">
                            ${props.price}
                        </h3>
                        <button className="cart-desc__container__btn">
                            Remove
                        </button>
                    </div>
                </div>
                <hr className="divideLine" />
            </div>
        </div>
    );
};

export default CartItem;
