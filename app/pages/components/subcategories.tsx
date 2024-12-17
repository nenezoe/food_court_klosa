"use client";
import Image from "next/image";
import { React, SetStateAction, useState, useEffect } from "react";
import Header from "./header";
import { Card } from "@material-tailwind/react";
import SubcategoryCard from '../../ui/SubcategoryCard';

const SubCategories = ({params } : {params: {categoryId: string}}
    ) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6); // Adjust the number of items per page as needed
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  
    const paginate = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };



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

  const products = [
    { id: 1, title: "Product 1", imageUrl: "/phone_case.svg", rating: 4, title2: 'IPhone 14pro max', subtitle: 'NGN750,000' },
    { id: 2, title: "Product 2", imageUrl: "/phone.svg", rating: 3, title2: 'IPhone 14pro max', subtitle: 'NGN750,000' },
    { id: 2, title: "Product 2", imageUrl: "/phone.svg", rating: 3, title2: 'IPhone 14pro max', subtitle: 'NGN750,000' },
    { id: 2, title: "Product 2", imageUrl: "/phone.svg", rating: 3, title2: 'IPhone 14pro max', subtitle: 'NGN750,000' },
    { id: 2, title: "Product 2", imageUrl: "/phone.svg", rating: 3, title2: 'IPhone 14pro max', subtitle: 'NGN750,000' },
    { id: 2, title: "Product 2", imageUrl: "/phone.svg", rating: 3, title2: 'IPhone 14pro max', subtitle: 'NGN750,000' },
    // Add more product data as needed
  ];

  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    return (
        //  {params.categoryId}
         
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
      <hr />
      {/* <div className="grid grid-cols-2 gap-4"> */}
      <div className="flex w-full">
      <div className=
      "sm:grid sm:grid-cols-2 md:grid-cols-3 flex-col justify-between w-7/12 sm:w-9/12 md:gap-4 p-4"
      // "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-5"
      >
      {products.map((product) => (
        <SubcategoryCard
          key={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          rating={product.rating}
          title2={product.title2}
          subtitle={product.subtitle}
        />
      ))}
    </div>
    <div className="grid grid-cols-1 w-5/12  sm:w-3/12 bg-green-500 p-4">gytgtftrftftf</div>
    </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className="mx-1">
            {index + 1}
          </button>
        ))}
      </div>
    </div>

    )
}

export default SubCategories;