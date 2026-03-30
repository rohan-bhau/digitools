import React from 'react'
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="text-white space-y-4">
      <h3 className="text-lg font-semibold">Social Links</h3>
      <div className="flex gap-4">
        <FaInstagram className="hover:text-red-500 cursor-pointer h-6 w-6 p-1 hover:bg-white hover:rounded-full" />
        <FaFacebookF className="w-6 h-6 hover:text-blue-700 hover:bg-white hover:rounded-full p-1 cursor-pointer" />
        <BsTwitterX className="hover:text-black w-6 h-6 p-1 hover:bg-white hover:rounded-full" />
      </div>
    </div>
  );
}

export default SocialLinks
