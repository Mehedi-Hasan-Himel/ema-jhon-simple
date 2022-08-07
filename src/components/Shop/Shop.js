import React from "react";
import "./Shop.css";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    /* Shop Section Start */
    <div className="shop-container">
      {/* Product Container Start */}
      <section className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </section>
      {/* Product Container End */}

      {/* Cart Container Start */}
      <section className="cart-container">
        <h3>Order Summary</h3>
      </section>
      {/* Cart Container End */}
    </div>
    /* Shop Section End */
  );
};

export default Shop;
