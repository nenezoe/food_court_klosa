import React from 'react'

interface SalesCardProps {
    title: string;
    subtext: string;
    description: string;
}

function    SalesCard({ title, subtext, description }: SalesCardProps) {
    return (
        <div className="w-full md:w-1/4 mx-auto p-10">
            <div className="flex flex-col items-center justify-start border-2 p-10">
                <div className="mb-2">
                    <img
                        src="/can.svg"
                        alt="Background"
                        className="object-cover w-28 h-52"
                    />
                    <hr/>
                </div>
                <div className="border-b border-gray-300 my-4"></div>
                <div className='text-left'>
                    <p className="text-sm mb-2 text-gray-600">{subtext}</p>
                    <h3 className="text-lg font-bold mb-1">{title}</h3>
                    <div className=" w-16 h-1 bg-orange-500 mb-2"></div>
                    <p className="text-sm text-justify text-gray-700">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default SalesCard