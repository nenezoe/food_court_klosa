"use client";
import Header from "./header";
import { SetStateAction, useState, useEffect } from "react";

const Product = ({params } : {params: {productId: string}}) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
      };

    return (
        <div>
            <Header />
            <div>
        <div className="hidden md:flex md:justify-center text-center  p-3">
          <ul className="flex md:justify-between p-5">
            <li className="md:mr-9 hover:underline hover:text-orange-500">
              HOME
            </li>
            <li className="md:mr-9 hover:underline hover:text-orange-500">
              SHOP
            </li>
            <li className="md:mr-9 hover:underline hover:text-orange-500">
              BLOG
            </li>
            <li className="md:mr-9 hover:underline hover:text-orange-500">
              PORTFOLIO
            </li>
            <li className="md:mr-9 hover:underline hover:text-orange-500">
              PAGES
            </li>
            <li className="md:mr-9 hover:underline hover:text-orange-500">
              CONTACT US
            </li>
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
              <li className="hover:underline hover:text-orange-500">HOME</li>
              <li className="hover:underline hover:text-orange-500">SHOP</li>
              <li className="hover:underline hover:text-orange-500">BLOG</li>
              <li className="hover:underline hover:text-orange-500">PORTFOLIO</li>
              <li className="hover:underline hover:text-orange-500">PAGES</li>
              <li className="hover:underline hover:text-orange-500">
                CONTACT US
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex w-full">
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 flex-col justify-between w-5/12 sm:w-9/12 md:gap-4 p-4">
        gehwghegdwqdquhdeyuqwdyuuhdyudyuqhdyuqwyduyqwwuqyuqqydqduuqdydduqudyuq
        </div>
        <div  className="grid grid-cols-2 w-7/12 sm:w-7/12 bg-green-500 p-4">gytgtftrftftf</div></div>
        </div>
    )
}

export default Product;