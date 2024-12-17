"use client";
import Image from "next/image";
import { React, SetStateAction, useState, useEffect } from "react";
import { FaBars, FaSearch, FaTimes  } from 'react-icons/fa';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSidebar, setShowSidebar] = useState(false);

    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchTerm(event.target.value);
      };
    
      const handleSearch = () => {
        // Implement your search logic here
        console.log(`Searching for: ${searchTerm}`);
      };
  
      
    const handleClear = () => {
      setSearchTerm('');
    };
  
    const handleToggleSidebar = () => {
      setShowSidebar(!showSidebar);
    };

    
  // Close sidebar when the window is resized
  const handleResize = () => {
    setShowSidebar(false);
  };
  
    return (
        <div>
            <div className="flex p-8 text-center align-middle items-center only:">
            <div className="flex ">
                <div className="md:pl-9">
            <Image src='/klosaLogo.svg' alt="" width='80' height='10' />
            </div>
            <div className="flex items-center md:pl-9">
      <div className="relative ">
      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
    {/* Add your search icon component or SVG here */}
    <svg
      className="h-5 w-5 text-gray-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M13.864 13.071a8 8 0 111.415-1.414l5.85 5.85-1.414 1.415-5.85-5.85zM2 8a6 6 0 1112 0 6 6 0 01-12 0z"
        clipRule="evenodd"
      />
    </svg>
  </div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-l-md focus:outline-none md:pl-9"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute top-0 right-0 bg-[#FF7D55] text-white p-2 rounded-r-md hover:bg-gray-400 focus:outline-none "
          >
            Search
            {/* <FaTimes /> */}
          </button>
         )} 
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded-r-md ml-2 hover:bg-blue-600 focus:outline-none"
      >
        <FaSearch />
      </button>
    
            </div>
            </div>
            <div className="md:hidden sm:ml-5">
          <button
            className="text-3xl focus:outline-none"
            onClick={handleToggleSidebar}
          >
            <FaBars />
          </button>
        </div>
            <div className="ml-4 hidden md:flex">
                <ul className="flex">
                    <li>
                        <div className="flex ml-4 mr-4">
                            <Image src='/user.svg' alt="" width='20' height='10' />
                            <div className="ml-2">Account</div>
                            <Image src='/arrow-down.svg' alt="" width='20' height='10' />
                        </div>
                    </li>

                    <li>
                        <div className="flex ml-4 mr-4">
                            <Image src='/question-mark-circle.svg' alt="" width='20' height='10' />
                            <div className="ml-2">Help</div>
                            {/* cart */}
                           
                        </div>
                    </li>

                    <li>
                        <div className="flex ml-4 mr-4">
                            <Image src='/cart.svg' alt="" width='20' height='10' />
                            <div className="ml-2">Cart</div>
                           
                        </div>
                    </li>
                </ul>
            </div>
        </div>
         {/* Responsive sidebar */}
      {showSidebar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setShowSidebar(false)}>
          <div className="fixed inset-y-0 left-0 w-64 bg-[#431E15] p-8" onClick={(e) => e.stopPropagation()}>
            {/* Sidebar content */}
            <ul className="gap-8 text-xs">
              {/* Your sidebar items */}
              <li className="flex items-center pt-9">
              <div className="flex ml-4 mr-4 text-white">
                            <Image src='/user.svg' alt="" width='20' height='10'  className="text-white" />
                            <div className="ml-2 text-white">Account</div>
                            <Image src='/arrow-down.svg' alt="" width='20' height='10'  className="text-white" />
                        </div>
              </li>
              <li className="flex items-center pt-5">
                 <div className="flex ml-4 mr-4 text-white">
                            <Image src='/question-mark-circle.svg' alt="" width='20' height='10' />
                            <div className="ml-2">Help</div>
                            {/* cart */}
                           
                        </div>
              </li>
              <li className="flex items-center pt-5">
                 <div className="flex ml-4 mr-4 text-white">
                            <Image src='/cart.svg' alt="" width='20' height='10' />
                            <div className="ml-2">Cart</div>
                           
                        </div>
              </li>
            </ul>
          </div>
        </div>
      )}
      <hr/>
        </div>
    )
}


export default Header;