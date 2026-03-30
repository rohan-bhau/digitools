import React, { Suspense, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Stats from "./components/Stats/Stats";
import ProductPlans from "./components/ProductPlans/ProductPlans";
import axios from "axios";
import Promotion from "./components/Promotion/Promotion";

const fetchProduct = async() => {
  const res = await fetch("/data.json")
  return res.json()
}

const App = () => {
  const productPromise = fetchProduct();
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>

      <Suspense fallback={<p>Data is loading</p>}>
      <ProductPlans productPromise={productPromise}></ProductPlans>
      </Suspense>

      <Promotion></Promotion>
    </div>
  );
};

export default App;
