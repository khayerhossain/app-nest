import { FaStar } from "react-icons/fa";

const Rating = () => {
    return (
      <div className="w-auto lg:w-7/12 mx-2 lg:mx-auto mt-16 mb-10 p-6  bg-white shadow-xl rounded-xl border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Leave a Review</h2>
  
        <div className="flex items-center justify-center mb-4 space-x-1">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <span
              key={i}
              className="text-3xl text-yellow-400 cursor-pointer hover:scale-110 transition"
            >
              <FaStar></FaStar>
            </span>
          ))}
        </div>

        <textarea
          className="w-full h-28 border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none transition-shadow"
          placeholder="Write your review..."
        />
  
        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition">
          Submit
        </button>
      </div>
    );
  };
  
  export default Rating;
  