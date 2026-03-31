import React, { useState } from "react";
import FeaturesCard from "./FeaturesCard";
import portfolio from "../../../src/assets/products/portfolio.png";
import { toast, ToastContainer } from "react-toastify";

const ProductPlan = ({
  product,
  cartCount,
  setCartCount,
  cartData,
  setCartData,
  total,
  setTotal,
}) => {
  const [state, setState] = useState(false);

  // console.log(cartData);
  const { name, tag, price, period, icon, tagType, description, features } =
    product;

  const btnHandleClicked = () => {
    // console.log('product');

    console.log("buy now btn clicked");
    setState(true);
    if (state === false) {
      setCartCount(cartCount + 1);
      setCartData([...cartData, product]);
      setTotal(product.price + total);
      toast.success("Added To The Cart");
    }

    // console.log(cartData);
    // console.log(cartData);
  };

  // console.log(productData);

  return (
    <div className="border relative text-left border-[#f2f2f2] space-y-4 rounded-xl mt-10 p-4 shadow transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-purple-400 mb-5">
      <div className="flex justify-end">
        <button
          className={`${tagType === "new" ? "bg-[#DBFCE7] text-[#0A883E] btn px-3 py-2" : ""} ${tagType === "popular" ? "bg-[#E1E7FF] text-[#9514FA] btn px-3 py-2" : ""} ${tagType === "best-seller" ? "bg-[#FEF3C6] text-[#BB4D00] btn px-3 py-2" : ""} rounded-full`}
        >
          {tag}
        </button>
      </div>
      <div className="w-15 h-15 bg-[#f2f2f2] rounded-full flex justify-center items-center">
        <img src={icon} alt="" />
      </div>
      <h2 className="text-xl text-black/90 font-bold">{name}</h2>
      <p className="text-lg text-black/60">{description}</p>
      <p className="text-xl font-bold">
        ${price}
        <span className="text-lg font-normal text-black/60">/{period}</span>
      </p>
      {features.map((feature, idx) => (
        <FeaturesCard key={idx} feature={feature}></FeaturesCard>
      ))}
      <button
        onClick={btnHandleClicked}
        disabled={state}
        className={`${state === true ? "btn bg-success text-black font-semibold" : "btn btn-primary hover:scale-105 hover:shadow-lg"} w-full rounded-full`}
      >
        {state === true ? "Added To the Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductPlan;
