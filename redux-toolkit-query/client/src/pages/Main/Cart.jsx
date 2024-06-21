import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div>
      <div className="flex flex-row flex-wrap gap-5">
        {cart.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
