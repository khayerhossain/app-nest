import React, { useEffect, useState } from 'react';
import { BsBookmark, BsShare } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';
import usePageTitle from '../PageTitle/PageTitle';
import Rating from '../Ratings/Rating';

const AppDetails = () => {
  usePageTitle('App Details')
  const [installed, setInstalled] = useState(false);
  const data = useLoaderData();
  const { id } = useParams();
  const [app, setApp] = useState({});

  useEffect(() => {
    const appDetails = data.find((app) => app.id == id);
    setApp(appDetails || {});
  }, [data, id]);

  const {
    name,
    thumbnail,
    rating,
    developer,
    downloads, 
    about,
    age = '12+',
    reviews = [],
  } = app;

  

  return (
    <>
    <div className="bg-base-100 px-12 mt-10 rounded-xl shadow-md p-6 max-w-3xl mx-auto hidden lg:flex justify-between items-center">
      {/* Left Side */}
      <div className="flex-1 pr-6">
        <h2 className="text-5xl font-bold mb-1">{name || 'App Name'}</h2>
        <p className="text-green-600 text-sm mb-4">{developer}</p>

        {/* Stats */}
        <div className="flex items-center gap-6 text-sm text-gray-700 mb-6">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-base">{rating}</span>
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span>Rating</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-semibold text-base">{downloads}</span>
            <span>Downloads</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-bold text-base border px-2 py-0.5 rounded">{age}</span>
            <span className="text-xs text-gray-500">Rated for</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <button onClick={()=>setInstalled(prv=>!prv)}    className={`btn rounded-xl ${installed ? 'bg-red-500' : 'bg-black text-white'}`}>
          {installed ? 'Uninstall' : 'Install'}
          </button>

          <BsShare className="text-xl text-gray-700 cursor-pointer" />
          <BsBookmark className="text-xl text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-shrink-0">
        <img
          src={thumbnail}
          alt={name}
          className="w-36 h-36 rounded-2xl object-cover shadow"
        />
      </div>
    </div>

    {/* for mobile view */}
    <div className="bg-base-100 mt-10 rounded-xl shadow-md p-6 max-w-2xl mx-2 flex flex-row-reverse  justify-center gap-5 lg:hidden">
      {/* Left Side */}
      <div className="flex-1 pr-6">
        <h2 className="text-2xl lg:text-5xl font-bold mb-1">{name || 'App Name'}</h2>
        <p className="text-green-600 text-sm mb-4">{developer}</p>

        {/* Stats */}
        <div className="flex items-center gap-6 text-sm text-gray-700 mb-6">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-base">{rating}</span>
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span>Rating</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-semibold text-base">{downloads}</span>
            <span>Downloads</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-bold text-base border px-2 py-0.5 rounded">{age}</span>
            <span className="text-xs text-gray-500">Rated for</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
         <button onClick={()=>setInstalled(prv=>!prv)}    className={`btn rounded-xl ${installed ? 'bg-red-500' : 'bg-black text-white'}`}>
          {installed ? 'Uninstall' : 'Install'}
          </button>
          <BsShare className="text-xl text-gray-700 cursor-pointer" />
          <BsBookmark className="text-xl text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-shrink-0">
        <img
          src={thumbnail}
          alt={name}
          className="w-24 h-24 lg:w-36 lg:h-36 rounded-2xl object-cover shadow"
        />
      </div>
    </div>

    {/* about this app */}
    <div className="max-w-2xl lg:max-w-3xl mx-auto p-4 mt-5 lg:mt-10 mb-10">
      <h2 className='text-2xl font-bold'>About this app</h2>
      <p className=''>{about}</p>
    </div>

 {/* users review */}
<div className="max-w-2xl lg:max-w-3xl mx-auto p-4 space-y-6">
  {reviews?.map((review, index) => (
    <div
      key={index}
      className="flex items-start space-x-4 p-4 border rounded-xl shadow bg-white"
    >
      <img
        src={review.profile_image}
        alt={review.profile_name}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-gray-800">{review.profile_name}</h4>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
          <div className="flex text-yellow-500">
            <FaStar className={review.rating >= 1 ? "text-yellow-500" : ""} />
            <FaStar className={review.rating >= 2 ? "text-yellow-500" : ""} />
            <FaStar className={review.rating >= 3 ? "text-yellow-500" : "text-gray-300"} />
            <FaStar className={review.rating >= 4 ? "text-yellow-500" : "text-gray-300"} />
            <FaStar className={review.rating >= 5 ? "text-yellow-500" : "text-gray-300"} />
          </div>
        </div>
        <p className="mt-2 text-gray-700 text-sm">{review.comment}</p>
      </div>
    </div>
  ))}
</div>
<Rating></Rating>
    </>
  
    
  );
};

export default AppDetails;
