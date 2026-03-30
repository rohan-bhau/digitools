import React from "react";
import Description from "./Description";
import Product from "./Product";
import Company from "./Company";
import Resources from "./Resources";
import SocialLinks from "./SocialLinks";
import EndMessage from "./EndMessage";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="container mx-auto text-white py-20 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        <Description></Description>
        <Product></Product>
        <Company></Company>
        <Resources></Resources>
        <SocialLinks></SocialLinks>
      </div>
      <EndMessage></EndMessage>
    </div>
  );
};

export default Footer;
