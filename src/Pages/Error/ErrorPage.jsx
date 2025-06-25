import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
    <Link to='/'>
    <button href="" className="px-4 py-2 bg-black text-white rounded ">
        Go Home
      </button>
    </Link>
    </div>
    );
};

export default ErrorPage;