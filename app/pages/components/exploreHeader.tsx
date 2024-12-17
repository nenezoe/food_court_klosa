"use client";
/* @jsxImportSource react */
import { React, useState } from "react";
import Image from "next/image";
import { Card } from "@material-tailwind/react";
import Link from "next/link";

// import logo from '../assets/images/logo.svg';
// import questionMark from '/imagez';

const ExploreHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div className="bg-[#431E15] text-white">
        <div className="flex justify-between items-center h-[80px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center">
            <img src="/logo.svg" width="40" height="40" alt="Logo" />
            <span className="ml-2 text-xl font-semibold">Klosa</span>
          </div>
          <div className="hidden md:flex items-center">
            <ul className="flex gap-6 text-xs">
              <li className="flex items-center">
                <div className="p-1">
                  <Image
                    src="/question-mark-button-svgrepo-com.png"
                    alt=""
                    width="15"
                    height="10"
                  />
                </div>
                <div>Need Help</div>
              </li>
              <li className="flex items-center">
                <div className="p-1">
                  <Image
                    src="/group_header.png"
                    alt=""
                    width="15"
                    height="10"
                  />
                </div>
                Free Delivery Over £50
              </li>
              <li className="flex items-center">
                <div className="p-1">
                  <Image
                    src="/clock-svgrepo.png"
                    alt=""
                    width="15"
                    height="10"
                  />
                </div>
                Fast Order
              </li>
              <li className="flex items-center">
                <div className="p-1">
                  <Image src="/store.png" alt="" width="15" height="10" />
                </div>
                Stores
              </li>
              <li className="flex items-center">
                <div className="p-1">
                  <Image
                    src="/calender-svgrepo.png"
                    alt=""
                    width="15"
                    height="10"
                  />
                </div>
                Exhibition Centre
              </li>
              <li className="flex items-center">
                <div className="">
                  <Image
                    src="/user-profile-svgrepo.png"
                    alt=""
                    width="15"
                    height="10"
                  />
                </div>
                Login/Sign up
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="text-3xl focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              &#9776;
            </button>
          </div>
        </div>

        {/* Responsive menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={closeMenu}
          >
            <div
              className="fixed inset-y-0 left-0 w-64 bg-[#431E15] p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sidebar content */}
              <ul className=" gap-8 text-xs">
                <li className="flex items-center pt-9">
                  <div className="p-1">
                    <Image
                      src="/question-mark-button-svgrepo-com.png"
                      alt=""
                      width="15"
                      height="10"
                    />
                  </div>
                  <div>Need Help</div>
                </li>
                <li className="flex items-center pt-5">
                  <div className="p-1">
                    <Image
                      src="/group_header.png"
                      alt=""
                      width="15"
                      height="10"
                    />
                  </div>
                  Free Delivery Over £50
                </li>
                <li className="flex items-center pt-5">
                  <div className="p-1">
                    <Image
                      src="/clock-svgrepo.png"
                      alt=""
                      width="15"
                      height="10"
                    />
                  </div>
                  Fast Order
                </li>
                <li className="flex items-center pt-5">
                  <div className="p-1">
                    <Image src="/store.png" alt="" width="15" height="10" />
                  </div>
                  Stores
                </li>
                <li className="flex items-center pt-5">
                  <div className="p-1">
                    <Image
                      src="/calender-svgrepo.png"
                      alt=""
                      width="15"
                      height="10"
                    />
                  </div>
                  Exhibition Centre
                </li>
                <li className="flex items-center pt-5">
                  <div className="">
                    <Image
                      src="/user-profile-svgrepo.png"
                      alt=""
                      width="15"
                      height="10"
                    />
                  </div>
                  Login/Sign up
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* Button to toggle the menu */}
        {/* <button onClick={toggleMenu}>Toggle Menu</button> */}
      </div>
      <div className="md:flex  bg-[#D6742B] h-[506px]">
        <div className="md:flex text-white items-center ">
          <div className="pt-9 md:ml-14 ml-9 ">
            <h1 className="md:text-[64px] text-[24px] font-[700]">
              Hello! What would
            </h1>
            <h1 className="md:text-[64px] font-[700] text-[24px]">
              you like to buy ?
            </h1>
            <p className="font-[400]">
              We have beautiful products ranging from house hold equipments
            </p>
            <p>
              to indoor appliances and all the basic stuff you need to kick
              start
            </p>
            <p>your housing journey</p>
            <div className="pt-6 pb-6">
              <Link href='/getStarted/mainHeader'>
              <button className="bg-[#38C4DC] text-white font-bold py-2 px-4 width-[200px] rounded-2xl">
                Explore now
              </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className=" justify-center items-center md:pl-28 pr-4">
              <input
                type="text"
                className="md:w-[220px] rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-500 p-4 text-black"
                placeholder="Type something..."
              />
            </div>
            <div>
              <button className="bg-[#38C4DC] text-white font-bold py-2 px-4 rounded-3xl">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex flex-wrap justify-center sm:justify-start md:pl-14">
      
        <div className="flex p-8">
          <Image src="/tv.svg" alt="" width="30" height="10" />
          <div className="pl-4">
            <strong>Click & Collect</strong>
            <p className="text-[9px] ">
              Save time , buy online 
            </p>
            <p className="text-[9px] ">
              and collect fromyour nearest store.
            </p>
          </div>
        </div>

        <div className="flex p-8">
          <Image src="/chat.svg" alt="" width="30" height="10" />
          <div className="pl-4">
            <strong>Get a Quote</strong>
            <p className="text-[9px] ">
            Got a large order ? add items
            </p>
            <p className="text-[9px] ">
            to the cart and submit a quote.
            </p>
          </div>
        </div>
        

        
        <div className="flex p-8">
          <Image src="/euro.svg" alt="" width="30" height="10" />
          <div className="pl-4">
            <strong>Returns</strong>
            <p className="text-[9px] ">
            If you’re unhappy with your item,
            </p>
            <p className="text-[9px] ">
            return it for FREE within 30 days.
            </p>
          </div>
        </div>

        
        <div className="flex p-8">
          <Image src="/delivery.svg" alt="" width="30" height="10" />
          <div className="pl-4">
            <strong>View & Track Orders</strong>
            <p className="text-[9px] ">
            View your full purchase history
            </p>
            <p className="text-[9px] ">
            and track the status of recent
orders.
            </p>
          </div>
        </div>

      
      </div>

      <div className="md:flex justify-around mb-5 ">
          <Card className="bg-[#000000] pl-5 pr-5 w-90">
            <div className="flex">
              <div className="text-[20px] text-white pt-7">Super
                <p>cool camera resolution</p>
                <p className="text-[15px] text-xs">10% on all apple product</p>
              </div>
              <div><Image src='/iPhone.svg' alt="" width='100' height='10' /></div>
            </div>
          </Card>

          <Card className="bg-[#152543] pl-5 pr-5">
            <div className="flex">
              <div className="text-[20px] text-white pt-7">Timeless
                <p>Possibilities</p>
                <p className="text-[15px] text-xs">Limited time offer</p>
              </div>
              <div><Image src='/watch.svg' alt="" width='150' height='40' /></div>
            </div>
          </Card>

          <Card className="bg-[#7F0808] p-9">
            <div className="flex">
              <div className="text-[20px] text-white">Hot Sale
                <p>Super Laptops 2022</p>
                <p className="text-[15px] text-xs">Free shipping on order</p>
              </div>
              <div><Image src='/laptop.svg' alt="" width='100' height='50' /></div>
            </div>
          </Card>
        </div>
    </div>
  );
};

export default ExploreHeader;
