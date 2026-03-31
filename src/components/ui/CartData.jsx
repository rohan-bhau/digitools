import React, { useState } from 'react'
import Cart from './Cart'
import { toast } from 'react-toastify'
// import styled from "styled-components";


const CartData = ({setCartCount, cartCount, cartData, setCartData, total, setTotal }) => {
    // console.log(cartData.price);

    const checkOutBtn = () => {
        setCartCount(0)
      setCartData([])
      setTotal(0)
      toast.info('Checkout Successfull',{position:'top-center'})
    }
    
  return (
    <div className="bg-[#ffff] border border-[#f2f2f2] container mx-auto mt-10 mb-10 px-10 py-10 rounded-lg ">
      <div className="flex justify-between mb-5">
        <h2 className="text-left font-bold text-lg">Your Cart</h2>
        <p className="font-bold text-lg">{cartData.length} Product Selected</p>
      </div>
      <div>
        {cartData.map((data, idx) => (
          <Cart
            total={total}
            setTotal={setTotal}
            key={idx}
            data={data}
            setCartCount={setCartCount}
            cartCount={cartCount}
            cartData={cartData}
            setCartData={setCartData}
          ></Cart>
        ))}
      </div>

      <div className="flex justify-between mb-5">
        <p className="text-black/60">Total:</p>
        <p className="font-semibold text-xl">${total}</p>
      </div>
      <button
        onClick={checkOutBtn}
        className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-full py-2 rounded-full transition-all duration-300 hover:scale-103 hover:shadow-lg font-semibold text-white"
      >
        Proceed To Checkout
      </button>
    </div>
  );
}

export default CartData
