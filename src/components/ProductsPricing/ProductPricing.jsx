import React, { use, useState } from 'react'
import PricingCard from './PricingCard';

const ProductPricing = ({ pricingPromise }) => {
  const [activePlan, setActivePlan] = useState(2)
  // console.log(pricingPromise);
  const pricingData = use(pricingPromise);
  // console.log(pricingData);

  return (
    <div>
      <div className="lg:container lg:mx-auto  p-10">
        <h2 className="text-center text-2xl font-bold text-black/70">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-md text-black/60 ">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-7 md:px-14 lg:container lg:mx-auto">
        {pricingData.map((data, idx) => (
          <PricingCard
            key={idx}
            data={data}
            activePlan={activePlan}
            setActivePlan={setActivePlan}
          ></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default ProductPricing
