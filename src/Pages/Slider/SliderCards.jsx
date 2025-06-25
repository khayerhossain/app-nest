import React from 'react';
import { Link } from 'react-router';

const SliderCards = ({ data }) => {
  const {name,thumbnail,rating,id}=data
  return (
 <Link to={`/appdetails/${id}`}>    
 <div className="flex justify-center items-center gap-2 cursor-pointer">
    <img src={thumbnail} alt='' className="w-[75px] rounded-2xl" />
    <div className="app-info">
      <h3 className="text-xl font-bold">{name}</h3>
      <div className="app-rating">Rating: {rating} / 5</div>
    </div>
  </div>
  </Link>
  );
};

export default SliderCards;
