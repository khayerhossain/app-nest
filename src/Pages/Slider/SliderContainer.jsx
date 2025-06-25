import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import SliderCards from './SliderCards';

// Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderContainer = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    fetch("/Apps_Data.json")
      .then((res) => res.json())
      .then((data) => setSliderData(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Change based on screen size
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className='w-11/12 mx-auto my-7'>
      <h2 className='text-2xl font-bold mb-6 '>Featured Apps</h2>
      
    <div className=" mx-auto bg-base-200 p-8 rounded-xl gap-5">
      
    <Slider {...settings}>
        {sliderData.slice(6,12).map(app => (
          <SliderCards key={app.id} data={app} />
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default SliderContainer;
