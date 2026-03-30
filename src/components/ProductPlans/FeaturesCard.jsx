import { Check } from 'lucide-react';
import React from 'react'

const FeaturesCard = ({ feature }) => {
  return (
    <div>
      <p className="flex gap-2 text-xl items-center text-black/60">
        <Check className="text-[#30B868] h-5 w-5" />
        {feature}
      </p>
    </div>
  );
};

export default FeaturesCard
