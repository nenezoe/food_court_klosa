"use client";
import Image from "next/image";
import { React, SetStateAction, useState, useEffect } from "react";
import { FaBars, FaSearch, FaTimes  } from 'react-icons/fa';
import SliderCarousel from "./sliderCarousel";
import Categories from "./categories";
import Header from "./header";


const DashboardHeader = () => {
  
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };

  

  // Close sidebar when the window is resized
  const handleResize = () => {
    setShowSidebar(false);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


    return (
        <div className="mb-9">
        <Header/>

      <div>
      <div className="hidden md:flex md:justify-between p-5">
        <ul className="flex md:justify-between p-5">
          <li className="md:mr-9">All Categories</li>
          <li className="md:mr-9">Computer and accessories</li>
          <li className="md:mr-9">Phone and tablets</li>
          <li className="md:mr-9">Electronics</li>
          <li className="md:mr-9">Kids fashion</li>
          <li className="md:mr-9">Home and Kitchen</li>
        </ul>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col p-5">
            <li>All Categories</li>
            <li>Computer and accessories</li>
            <li>Phone and tablets</li>
            <li>Electronics</li>
            <li>Kids fashion</li>
            <li>Home and Kitchen</li>
          </ul>
        </div>
      )}
    </div>
      <hr/>

<div className="pb-24">
<SliderCarousel />
</div>
      
      <div className="pt-21 text-[24px] pl-9 pb-6">Categories</div>
      <Categories />
        </div>
    )
}



export default DashboardHeader;