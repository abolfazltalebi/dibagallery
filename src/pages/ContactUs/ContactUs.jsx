import React from "react";
import MapComponent from "../../components/MapComponent";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export default function ContactUs() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 container">
      <MapComponent />
      <div className="space-y-4 bg-white text-black p-4 rounded-[20px_20px_20px_0px]">
        <h2 className="text-xl font-bold text-red-600">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          Our support team is available 24/7 to assist you. This communication
          takes different forms across various channels.
        </p>
        <div className="bg-gray-100 grid grid-cols-2  p-6 mt-4 rounded-lg shadow">
          <div className="flex items-center space-x-4">
            <FiPhoneCall />
            <p className="text-gray-700">+1 234 567 89</p>
          </div>
          <div className="flex items-center space-x-4 mt-3">
            <MdOutlineMail />
            <p className="text-gray-700">info@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4 mt-3 col-span-3">
            <CiLocationOn />
            <p className="text-gray-700">
              New York - 21 Niche Street - Building 28
            </p>
          </div>
        </div>
        <button className="px-8 py-3 rounded-[50px_50px_50px_0px] bg-[#E58411] text-sm capitalize transition-all duration-300 hover:px-10 m-2 text-white">
          call diba gallery
        </button>
        <button className="px-8 py-3 rounded-[50px_50px_50px_0px] bg-[#E58411] text-sm capitalize transition-all duration-300 hover:px-10 m-2 text-white">
          home diba gallery
        </button>
      </div>
    </section>
  );
}
