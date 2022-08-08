import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowCircleRight,
  faEraser,
  faTrash,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import"./Cart.css"

const Cart = ({cart}) => {
  return (
    <div>
      {/* Cart Container Start */}
      <h3>Order Summary</h3>
      <p>Selected Items: </p>
      <p>Total Price: </p>
      <p>Total Shipping Charge:</p>
      <p>Tax:</p>
      <p>Grand Total: </p>
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
