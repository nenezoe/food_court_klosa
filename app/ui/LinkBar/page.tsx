import React from 'react'

const LinkBar = () => {
    return (
        <div className="flex justify-between items-center px-20 py-4 text-black  font-bold">
            <div className="flex items-center space-x-4">
                <p className="text-black-300 text-3xl border-b-4 border-orange-500 ">Top Selling Products</p>
            </div>

            <div className="flex items-center space-x-4 p-5 text-1xl hidden md:flex">
                <p className="text-black-300">Furniture</p>
                <p className="text-orange-500">Gadgets</p>
                <p className="text-black-300">Kitchen Utensils</p>
                <p className="text-black-300">Mobile Phones</p>
                <p className="text-black-300">Laptops</p>
                <p className="text-black-300">Clothing</p>
            </div>
        </div>

    )
}

export default LinkBar