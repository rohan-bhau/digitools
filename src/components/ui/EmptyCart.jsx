import React from 'react'
import { FiShoppingCart } from 'react-icons/fi';


const EmptyCart = () => {
  return (
    <div className="bg-[#ffff] border border-[#f2f2f2] container mx-auto mt-10 mb-10 px-10 py-10 rounded-lg ">
      <h2 className="font-bold text-left text-2xl text-black/80 mb-4">
        Your Cart
      </h2>
      <FiShoppingCart className="mx-auto h-14 w-14 mb-3 text-black/60" />{" "}
      <p className='text-black/60'>Your Cart Is Empty </p>
    </div>
  );
}

export default EmptyCart
