import React from 'react';

interface CollectionCardProps {

}
const CollectionCard = ({ imageUrl, title, description }) => {
    return (
        <div className="relative bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url(${imageUrl})`, height: '415px', width: '312px'  }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                    <h2 className="text-3xl font-semibold mb-2">{title}</h2>
                    <p className="text-lg">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CollectionCard;
