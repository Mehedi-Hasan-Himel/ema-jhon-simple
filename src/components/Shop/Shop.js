import "./Shop.css";

import React from "react";

const Shop = () => {
  return (
    /* Shop Section Start */
    <section className="shop-container">
      {/* Product Container Start */}
        <section className="products-container">
           <h3>This is for products</h3>
      </section>
      {/* Product Container End */}

      {/* Cart Container Start */}
        <section className="cart-container">
           <h3>Order Summary</h3>
      </section>
      {/* Cart Container End */}
    </section>
    /* Shop Section End */
  );
};

export default Shop;
