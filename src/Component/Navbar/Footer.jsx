import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaServicestack } from 'react-icons/fa';
import Home from '../Header2/Home';
import About from './Footer/About';
import Contact from './Footer/Contact'

function Footer() {
  return (
    <footer className='bg-blue-500 w-full py-10 text-white '>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-col md:flex-row gap-6 mb-6 md:mb-0'>
          <Link to="/Home" className='flex items-center hover:underline transition' aria-label="Home">
            <FaHome className='mr-2' />
            <span className='text-xl font-bold'>Home</span>
          </Link>

          <Link to="/About" className='flex items-center hover:underline transition' aria-label="About Us">
            <FaInfoCircle className='mr-2' />
            <span className='text-xl font-bold'>About Us</span>
          </Link>

          <Link to="/Contact" className='flex items-center hover:underline transition' aria-label="Contact Us">
            <FaEnvelope className='mr-2' />
            <span className='text-xl font-bold'>Contact Us</span>
          </Link>

          <Link to="/Services" className='flex items-center hover:underline transition' aria-label="Services">
            <FaServicestack className='mr-2' />
            <span className='text-xl font-bold'>Services</span>
          </Link>
        </div>

        <div className="text-center mt-6 md:mt-0">
          <p className='text-sm'>
            &copy; Kunal Tiwari 213 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
