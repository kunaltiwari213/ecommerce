import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../Header2/Home';

function About() {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl">
        <h1 className="text-4xl font-extrabold text-center text-blue-600">Dukaan</h1>
        <p className="text-xl font-semibold text-center text-gray-700 mb-4">Apne ghar ki Dukaan</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Welcome to Dukaan!</h2>
        <p className="text-gray-600 mb-4">
          Your one-stop online shopping destination! At Dukaan, we believe that shopping should be a seamless and enjoyable experience.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Our Mission</h3>
        <p className="text-gray-600 mb-4">
          Our mission is to bring you a curated selection of high-quality products at unbeatable prices, all from the comfort of your home.
          Founded with a passion for innovation and customer satisfaction, Dukaan offers a wide range of categories, including fashion, electronics, home goods, and more.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Our Commitment</h3>
        <p className="text-gray-600 mb-4">
          We pride ourselves on providing not only exceptional products but also outstanding service. Our user-friendly website and secure payment options ensure a hassle-free shopping experience.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Support Local Artisans</h3>
        <p className="text-gray-600 mb-4">
          At Dukaan, we are committed to supporting our community and promoting sustainable practices. We collaborate with local artisans and brands, helping them reach a broader audience while showcasing the uniqueness of their offerings.
        </p>
        <p className="text-gray-600 mb-6">
          Join us in redefining the way you shop. Explore our diverse range of products and experience the convenience of online shopping with Dukaan. Thank you for choosing us!
        </p>
        <div className="flex justify-center">
          <Link to ="/Home">
          
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
            Start Shopping
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
