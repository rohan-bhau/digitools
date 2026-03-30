import { Check } from 'lucide-react';
import React from 'react'

const FeatureCard = ({ feature }) => {
    // console.log(feature);
    
  return (
    <div className="flex items-center gap-3">
      <Check className="text-[#30B868] h-5 w-5" />
      <p className="text-lg text-black/70">{feature}</p>
    </div>
  );
};

export default FeatureCard
