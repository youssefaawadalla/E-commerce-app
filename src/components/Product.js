import React, { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";

function Product(props) {
  const { product } = props;
  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(ShoppingCartContext);
  const cartItem = cart.find((item) => item.id === product.id) || {
    quantity: 0,
  };

  return (
    <div className="card h-100">
      <img
        src={product.image}
        className="card-img-top img-fluid"
        alt={product.title}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <h6 className="mt-auto mb-3">${product.price}</h6>
        <div className="d-flex align-items-center mt-auto">
          {cartItem.quantity === 0 ? (
            <button
              onClick={() => addToCart(product)}
              className="btn btn-primary"
            >
              + Add to cart
            </button>
          ) : (
            <>
              <button
                onClick={() => decreaseQuantity(product.id)}
                className="btn btn-secondary me-2"
              >
                -
              </button>
              <div>
                <span className="fs-4">{cartItem.quantity}</span> in cart
              </div>
              <button
                onClick={() => increaseQuantity(product.id)}
                className="btn btn-secondary ms-2"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(product.id)}
                className="btn btn-danger ms-3"
              >
                Remove
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
