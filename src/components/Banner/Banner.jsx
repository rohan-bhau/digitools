import React from 'react'
import play from '../../assets/play.png';
import bannerImg from '../../assets/banner.png';
import badge from "../../assets/badge.png";

const Banner = () => {
  return (
    <div className="container mx-auto mt-10 pt-20 flex gap-15 justify-between flex-col md:flex-row  items-center px-7 md:px-14">
      <div className="flex justify-center  flex-col space-y-4">
        <div className="text-left w-fit flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-[#e1e7ff] ">
          <img className="w-4 h-4" src={badge} alt="" />{" "}
          <h3 className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            New: AI Power Tools Available
          </h3>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-black/80">
          Supercharge Your Digital Workflow
        </h2>
        <p className="text-black/60 text-lg">
          Access premium AI tools, design assets, templates, and productivity{" "}
          
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-4 items-center ">
          <button className="bg-gradient-to-r  from-[#4F39F6] to-[#9514FA] rounded-full text-white  font-semibold p-[10px] md:p-4  cursor-pointer">
            Explore Products
          </button>
          <button className="flex justify-center items-center btn btn-primary btn-outline p-[12px] md:p-6 rounded-full">
            <img src={play} alt="" /> Watch Demo
          </button>
        </div>
      </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
}

export default Banner
