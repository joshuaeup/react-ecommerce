const Products = (props) => {
    return (
        <div>
            <a href="/">
                <article className="product-grid-container__column">
                    <div className="product-grid-item-img">
                        <img
                            className="grid-img"
                            src={props.image}
                            alt="cupcake"
                        />
                    </div>
                    <div className="product-grid-desc">
                        <div className="product-grid-item">
                            <p>{props.name}</p>
                        </div>
                        <div className="product-grid-item">
                            <span>
                                <i className="fas fa-star star-icon"></i>
                                <i className="fas fa-star star-icon"></i>
                                <i className="fas fa-star star-icon"></i>
                                <i className="fas fa-star star-icon"></i>
                                <i className="fas fa-star star-icon"></i>{" "}
                                {props.reviews}
                            </span>
                        </div>
                        <div className="product-grid-item">
                            <span className="grid-price">{props.price}</span>
                        </div>
                    </div>
                </article>
            </a>
        </div>
    );
};

export default Products;
