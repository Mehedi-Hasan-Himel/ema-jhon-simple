import "./Shop.css";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    /* Shop Section Start */
    <section className="shop-container">
      {/* Product Container Start */}
      <section className="products-container">
        <h3>This is for products: {products.length}</h3>
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
