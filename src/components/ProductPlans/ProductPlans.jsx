import { use, useState } from 'react';
import ProductPlan from './ProductPlan'
import CartData from '../ui/CartData';
import EmptyCart from '../ui/EmptyCart';

const ProductPlans = ({ productPromise, cartCount, setCartCount, cartData, setCartData }) => {
  const [activeTab, setActiveTab] = useState("products");
    const [total, setTotal] = useState(0);

  // console.log(activeTab);

  const productData = use(productPromise);
  // console.log(productData);

  // const tabHandleClicked = ()=>{
  //   if (activeTab === "active") {

  //   }

  // }

  return (
    <div className="mt-30 text-center  md:px-14 ">
      <h2 className="text-3xl md:text-4xl font-bold px-7 mb-2 text-black/80">
        Premium Digital Tools
      </h2>
      <p className="text-lg px-7 text-black/60 mb-4">
        Choose from our curated collection of premium digital products designed{" "}
         to boost your productivity and creativity.
      </p>
      <div className="flex justify-center w-fit  mx-auto border-2 rounded-full border-[#f6f6f6] p-1">
        <button
          onClick={() => setActiveTab("products")}
          className={`${activeTab === "products" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} btn rounded-full border-none `}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab("cart")}
          className={`${activeTab === "cart" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} btn rounded-full border-none  pl-6 pr-6 w-fit`}
        >
          Cart({cartCount})
        </button>
      </div>

        {activeTab === "products" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-8 container mx-auto px-7 md:px-14 ">
          {productData.map((product, idx) => (
            <ProductPlan
              total={total}
              setTotal={setTotal}
              cartData={cartData}
              setCartData={setCartData}
              cartCount={cartCount}
              setCartCount={setCartCount}
              key={idx}
              product={product}
            ></ProductPlan>
          ))}
            </div>
       
        ) : (
          <div>
            {
              cartData.length>0? (<CartData
              total={total}
              setTotal={setTotal}
              cartCount={cartCount}
              setCartCount={setCartCount}
              cartData={cartData}
              setCartData={setCartData}
            ></CartData>):(<EmptyCart></EmptyCart>)
            }
          </div>
        )}
      </div>
  );
};

export default ProductPlans
