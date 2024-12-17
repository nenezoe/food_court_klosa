import { useRouter } from 'next/navigation';


const CategoryCard = ({imageUrl, title }) => {
    const router = useRouter();

    const handleCardClick = (id) => {
        router.push(`/getStarted/mainHeader/${id}`);
        console.log(`Card with id ${id} clicked`);
      };

    return (

        <div>
        <div className="max-w-xs bg-[#D9D9D9] shadow-md rounded-md overflow-hidden" onClick={handleCardClick}>
        <img src={imageUrl} alt={title} className="w-full h-40 " />
       
      </div>
      <div className="flex items-center justify-center">{title}</div>
      </div>
    )
}

export default CategoryCard;