import React from 'react';
import { FaInfoCircle, FaReact } from 'react-icons/fa';
import usePageTitle from '../PageTitle/PageTitle';

const About = () => {
  usePageTitle('About')
  return (
    <div className="min-h-screen bg-white px-4 mt-10 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-gray-50 shadow-md rounded-xl p-6 text-center">
        <FaInfoCircle className="text-4xl text-blue-500 mb-4 mx-auto" />
        <h1 className="text-3xl font-bold mb-3">About AppNest</h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          AppNest is a modern platform that highlights trending, featured, and category-based mobile applications.
          Designed to provide an intuitive and sleek user experience, AppNest is built using powerful web technologies
          like React and Firebase, ensuring performance and scalability.
        </p>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <h2 className="text-xl font-semibold mb-3">Purpose & Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Our goal with AppNest is to simplify app discovery by showcasing hand-picked, high-quality mobile apps in
            one place. Whether you're a tech enthusiast or a casual user, AppNest helps you explore new apps efficiently
            with an elegant and minimal interface.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">Technologies Used</h2>
          <div className="flex justify-center items-center gap-6">
            <FaReact className="text-sky-500 text-3xl" title="ReactJS" />
            <img
              src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png"
              alt="Firebase"
              className="h-10"
              title="Firebase"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
