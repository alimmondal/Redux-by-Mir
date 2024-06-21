import React from "react";
import { BiListPlus } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div className="">
      <div
        className="w-72 h-120 shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative"
        key={product.model}
      >
        {pathname.includes("cart") && (
          <div className="grid place-items-center bg-indigo-900 text-white w-8 h-8 rounded-full absolute top-2 right-2">
            <p>{product.quantity}</p>
          </div>
        )}
        <div className="h-52 w-52 mx-auto">
          <img src={product.image} alt={product.model} />
        </div>
        <h1 className="font-bold text-center">{product.model}</h1>
        <p className="text-center font-semibold mb-3">
          Rating: {product.rating}
        </p>
        <div className="flex-1">
          <ul className="space-y-2">
            {product.keyFeature.map((feature) => {
              return (
                <li key={feature} className="text-sm ">
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-2 mt-5">
          {pathname.includes("cart") && (
            <button
              title="Remove from cart"
              className="bg-red-500 rounded-full py-1 px-4 flex justify-between items-center text-white text-bold"
              onClick={() => dispatch(removeFromCart(product))}
            >
              <p>Remove</p>
              <RiDeleteBin2Line className="text-white" />
            </button>
          )}
          {!pathname.includes("cart") && (
            <button
              className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to cart
            </button>
          )}
          {!pathname.includes("cart") && (
            <button
              title="Add to wishlist"
              className="bg-indigo-500  py-1 px-2 rounded-full"
            >
              <BiListPlus className="text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
