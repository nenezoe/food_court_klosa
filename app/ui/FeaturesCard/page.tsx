import React from 'react'

const FeaturesCard = ({ icon, title, subtext, description }) => (
    <div className="w-full md:w-1/4 p-4">
        <div className="flex flex-col items-center justify-start">
            <div className="mb-2">
                <img
                    src={icon}
                    alt="Background"
                    className="object-cover w-full h-full"
                />
            </div>
            <p className="text-sm mb-2 text-gray-600">{subtext}</p>
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <div className=" w-16 h-1 bg-orange-500 mb-2"></div>
            <p className="text-sm text-justify text-gray-700">{description}</p>
        </div>
    </div>
);

export default FeaturesCard