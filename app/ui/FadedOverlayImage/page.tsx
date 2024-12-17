import React from 'react';

const FadedOverlayImage = ({ imageUrl, title, description, bgProp, svgPath }) => {
    return (
        <div className="relative w-full h-64">
            {/* Image */}
            <img
                src={imageUrl}
                alt="Background"
                className="object-cover w-full h-full"
            />

            {/* Overlay */}
            <div className={`absolute top-0 left-0 w-full h-full ${bgProp} opacity-60`}>
                {/* SVG Image */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    {/* Your SVG path or content goes here */}
                    <path d={svgPath} />
                </svg>
            </div>

            {/* Text Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 text-center whitespace-nowrap">
                <h2 className="text-4xl font-bold ">{title}</h2>
                <p className="mt-2 text-xl">{description}</p>
            </div>
        </div>
    );
};

export default FadedOverlayImage;
