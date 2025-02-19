import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

function TopRated() {
  const {
    state: { products, loading, error },
  } = useProducts();
  // console.log(data);

  let content;

  if (loading) {
    content = <p>Loading</p>;
  }
  if (error) {
    content = <p>something went wrong</p>;
  }
  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show, product length is empty</p>;
  }
  if (!loading && !error && products.length) {
    content = products
      .filter((product) => product.rating >= 4)
      .map((product) => <ProductCard product={product} key={product._id} />);
  }
  return (
    <div>
      <div className="">{content}</div>
    </div>
  );
}

export default TopRated;
