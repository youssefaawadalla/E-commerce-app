import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartContext from "../context/ShoppingCartContext";
import logo from "../images/logo.png";

function Navbar() {
  const { cart, removeFromCart } = useContext(ShoppingCartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart
    .reduce((sum, item) => sum + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              style={{ height: "50px", width: "auto" }}
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link position-relative"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <div
                    className="badge bg-danger rounded-circle"
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      fontSize: "0.65rem",
                    }}
                  >
                    {totalItems}
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cart.length > 0 ? (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between mb-3"
                >
                  <div>{item.title}</div>
                  <div className="d-flex align-items-center">
                    <span>{item.quantity} x ${item.price}</span>
                    <button
                      className="btn btn-danger btn-sm ms-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <div>Total:</div>
                <div>${totalPrice}</div>
              </div>
            </>
          ) : (
            <div>Your cart is empty</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
