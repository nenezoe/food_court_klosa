import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        
        autoplaySpeed: 3000,  
        // beforeChange: (current, next) => setCurrentSlide(next),
      };

      const renderDots = () => {
        const totalSlides = React.Children.count(settings.children);
    
        return Array.from({ length: totalSlides }).map((_, index) => (
          <li
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-transparent"
            }`}
          ></li>
        ));
      };


    return (
        <div className="h-64 pl-12 pr-12">
      <Slider {...settings}>
        {/* Your carousel slides go here */}
        <div className="bg-[#FF7D55] pt-20 pl-9 text-white pb-20">
          <h1 className="text-[50px]">Weekend</h1>
          <h1 className="text-[50px]">Shopathon</h1>
          <p className="text-[14px]">Stock up for the weekend</p>
          {/* Add your content for Slide 1 */}
        </div>
        <div className="bg-[#514d4c] pt-20 pl-9 text-white pb-20">
          <h1 className="text-[50px]">Weekend</h1>
          <h1 className="text-[50px]">Shopathon</h1>
          <p className="text-[14px]">Stock up for the weekend</p>
          {/* Add your content for Slide 1 */}
        </div>
        <div className="bg-[#41d163] pt-20 pl-9 text-white pb-20">
          <h1 className="text-[50px]">Weekend</h1>
          <h1 className="text-[50px]">Shopathon</h1>
          <p className="text-[14px]">Stock up for the weekend</p>
          {/* Add your content for Slide 1 */}
        </div>
        {/* Add more slides as needed */}
      </Slider>
      {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4">
        <ul className="flex space-x-2 ">{renderDots()}</ul>
      </div> */}
    </div>
    )
}

export default SliderCarousel;