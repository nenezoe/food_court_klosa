import React from 'react';
import { useRouter } from 'next/navigation';

const StarRating = ({ rating }) => {


    // Function to generate star icons based on the rating
    const renderStars = () => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        stars.push(
          <span
            key={i}
            className={`text-yellow-500 ${
              i < rating ? "fill-current" : "stroke-current"
            }`}
          >
            ★
          </span>
        );
      }
      return stars;
    };
  
    return <div className="flex">{renderStars()}</div>;
  };

  
  
  const SubcategoryCard = ({ imageUrl, title, rating, title2, subtitle  }) => {
    const router = useRouter();
    const handleCardClick = (id) => {
      router.push(`/getStarted/mainHeader/${id}/${id}`);
      console.log(`Card with id ${id} clicked`);
    };
    return (
      <div className="sm:w-full  bg-white shadow-md rounded-md overflow-hidden"  onClick={handleCardClick}>
        <div className=' flex w-full justify-center'><img src={imageUrl} alt={title} className="w-32 h-40 object-cover" /></div>
        <div className=' p-4'>
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <StarRating rating={rating} />
        </div>
        <h1 className='text-lg font-semibold text-gray-800'>{title2}</h1>
        <div className='text=[#FF7D55]'>{subtitle}</div>
        </div>
      </div>
    );
  };
  
  export default SubcategoryCard;