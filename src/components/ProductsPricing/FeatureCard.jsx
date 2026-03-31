import { Check } from 'lucide-react';
import React from 'react'

const FeatureCard = ({ feature,activePlan, data }) => {
    // console.log(feature);
    
  return (
    <div
      className={`${activePlan === data.id ? "text-white" : ""} flex items-center gap-3`}
    >
      <Check className={`${activePlan===data.id?"text-white":""} text-[#30B868] h-5 w-5`}/>
      <p className={`${activePlan===data.id?"text-white":""} text-lg text-black/70`}>{feature}</p>
    </div>
  );
};

export default FeatureCard
