import React, { use } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
const dataPromise=fetch('/Apps_Data.json')
.then((res) => res.json())
const TrendingApps = () => {
    const appsData=use(dataPromise);
    return (
            <div className="mt-10 lg:mt-20">
                <h2 className='text-2xl font-bold mb-6 ml-5 lg:ml-12'>Trending Apps</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 mx-auto my-7">
                    {appsData.slice(0, 8).map(app => (
                       <Link to={`/appdetails/${app.id}`}> 
                        <div key={app.id} className=" bg-base-200 pt-4  flex flex-col justify-center items-center rounded-2xl cursor-pointer">
                            <img className='w-24 rounded-2xl' src={app.thumbnail} alt={app.name} />
                            <div className="card-body">
                                <h2 className="card-title">{app.name}</h2>
                                <p>{app.category}</p>
                              <div className='flex items-center'>
                              <FaStar className='text-amber-400 mr-1'/>
                              <p> {app.rating}</p>
                              </div>
                            </div>
                        </div>
                       </Link>
                    ))}
                </div>
            </div>
    );
};

export default TrendingApps;