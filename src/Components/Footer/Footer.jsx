import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-base-50 border-t mt-20 lg:mt-20 text-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About AppNest */}
        <div>
         <div className="flex ">
         <img className='w-6 h-6' src={Logo} alt="" />
         <h3 className="font-semibold mb-4">AppNest</h3>
         </div>
          <p className="text-sm">
            Discover top apps, curated picks, and new releases — all in one place. AppNest brings a sleek mobile marketplace experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Top Charts</a></li>
            <li><a href="#">New Releases</a></li>
            <li><a href="#">Developer Resources</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Connect & Subscribe */}
        <div>
          <h3 className="font-semibold mb-4">Stay Connected</h3>
          <div className="flex space-x-4 text-xl mb-4 mt-0 lg:mt-7">
            <a href="https://www.instagram.com/thecoooll?igsh=NXNrOGY3dWwyYzlo&utm_source=qr"><FaInstagram /></a>
            <a href="https://www.facebook.com/share/18kbFABsTs/?mibextid=wwXIfr"><FaFacebookF /></a>
            <a href="https://www.facebook.com/share/18kbFABsTs/?mibextid=wwXIfr"><FaTwitter /></a>
            <a href="https://www.instagram.com/thecoooll?igsh=NXNrOGY3dWwyYzlo&utm_source=qr"><FaLinkedinIn /></a>
          </div>
          <form className="flex mt-0 lg:mt-10">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 flex-grow border rounded-l-md text-sm"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 rounded-r-md text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 ">
        © 2025 AppNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
