import Image from 'next/image';
import React from 'react';

const ListCard = ({ title, description, rating, price, progress, img }) => {
  return (
    <div className="w-80 h-full mx-auto rounded-sm bg-white overflow-hidden shadow-lg m-4">
      
      <Image width={217} height={214} src={img} alt='image' className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{title}</div>
        {/* <p className="text-gray-600 text-sm">{description}</p> */}
      </div>
      <div className="px-6 py-2">
        <span className="text-yellow-500 flex flex-row">
          {Array.from({ length: rating }).map((_, index) => (
            <svg
              key={index}
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"  
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2L15.09 8.26l6.47.96-4.69 4.54 1.1 6.44-5.78-3.03-5.78 3.03 1.1-6.44L2.46 9.22 8.54 8.26z" />
            </svg>
          ))}
        </span>
      </div>
      <div className="px-6 py-2">
        <span className="text-black-700  font-bold ml-2">${price}</span>
      </div>
      <div className="px-6 py-2">
        <div className="relative pt-1">
          <div className="flex flex-col">
            <div className="w-full bg-gray-200 rounded-full">
              <div
                className="bg-orange-600 text-xs leading-none py-1 text-center text-white rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
