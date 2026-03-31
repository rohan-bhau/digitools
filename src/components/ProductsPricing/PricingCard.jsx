import React, { useState } from 'react'
import FeatureCard from './FeatureCard';
import { toast } from 'react-toastify';

const PricingCard = ({ data, activePlan, setActivePlan }) => {
  const [state, setState] = useState(false)
  const choosePlan=(data) => {
    console.log('btn clicked',data.id);
    setActivePlan(data.id)
    
  }
  const btnClicked = () => {
    setState(true)
    toast.success(`Your ${data.plan_name} plan is activated`);
  }

  // console.log(data.most_popular_tag);

  return (
    <div
      onClick={() => choosePlan(data)}
      className={`${activePlan === data.id ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} bg-[#f2f2f2] p-6 mb-6 rounded-lg shadow space-y-6 relative flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-purple-400`}
    >
      <h2
        className={`absolute -top-3 left-[33%] md:left-[30%] lg:left-[40%] bg-[#FEF3C6] text-[#BB4D00] font-semibold px-3 py-2 rounded-full ${data.most_popular_tag === false ? "hidden" : ""}`}
      >
        Most Popular
      </h2>
      {/* {{ data.most_popular_tag } ? <h2 className="absolute -top-3 left-45 bg-amber-300 px-2 py-2 rounded-full">
        popilar tag
      </h2>:"" } */}

      <div>
        <h2 className={` text-2xl font-semibold mb-2`}>{data.plan_name}</h2>
        <p
          className={`${activePlan === data.id ? "text-white/70" : ""} text-black/60`}
        >
          {data.tagline}
        </p>
      </div>
      <div className="flex items-center">
        <h2 className={` text-2xl font-bold`}>{data.price}</h2>
        <span
          className={`${activePlan === data.id ? "text-white/80" : ""} text-lg text-black/60`}
        >
          {data.period}
        </span>
      </div>
      <div>
        {data.features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            feature={feature}
            activePlan={activePlan}
            data={data}
          ></FeatureCard>
        ))}
      </div>
      <button
        disabled={state}
        onClick={btnClicked}
        className={`w-full rounded-full btn 
  ${
    state
      ? "bg-green-500 text-white cursor-not-allowed"
      : activePlan === data.plan_name
        ? "bg-white text-[#9514FA]"
        : "btn-primary"
  }`}
      >
        {state === true ? "Plan Purchased" : data.call_to_action}
      </button>
    </div>
  );
};

export default PricingCard
