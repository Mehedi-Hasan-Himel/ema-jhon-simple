import React from "react";
import "./Shop.css";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    /* Shop Section Start */
    <div className="shop-container">
      {/* Product Container Start */}
      <section className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </section>
      {/* Product Container End */}

      {/* Cart Container Start */}
      <section className="cart-container">
       <Cart cart={cart}></Cart>
      </section>
      {/* Cart Container End */}
    </div>
    /* Shop Section End */
  );
};

export default Shop;
