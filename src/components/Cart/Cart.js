import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;

  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));

  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      {/* Cart Container Start */}
      <h3>Order Summary</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: $ {total} </p>
      <p>Total Shipping Charge: $ {shipping}</p>
      <p>Tax: {tax}</p>
      <h4>Grand Total: {grandTotal} </h4>
      <button className="clear-btn">
        <p className="clear-text">Clear Cart</p>
        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
      </button>
      <br />
      <button className="review-btn">
        <p className="review-text">Review Order</p>
        <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon>
      </button>
      {/* Cart Container End */}
    </div>
  );
};

export default Cart;
