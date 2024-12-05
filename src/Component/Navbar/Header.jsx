import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import Home from '../Header2/Home';
import Kidswear from '../Header2/Kidswear'
// import Electronic from '../Header2/Electronic'
import Toprated from '../Header2/Toprated'
import Trending from '../Header2/Trending'
import Women from '../Header2/Women'
import Mens from '../Header2/Men';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Hero from './Hero';
import Login from '../Navbar/Login'
import { FaShoppingCart } from "react-icons/fa";
import Add from '../Other/Add';
import { useAuth0 } from "@auth0/auth0-react";
import Footer from './Footer';

function Header() {
  const { loginWithRedirect, logout } = useAuth0();
  const { isAuthenticated , user} = useAuth0();
  const [isMenuOpen,setisMenuOpen] = useState(false);

  const Togglemenu = () => setisMenuOpen(!isMenuOpen);

  return (
    <div className='w-full'> 
      {/* <Hero/> */}
    <div className= "bg-gray-900 flex justify-evenly items-center p-2 ">
        
        <h1 className= "text-yellow-600  font-extrabold text-start text-2xl container flex justify-start ">
          Dukaan</h1>
          
 
          
      
        <div className='relative group mr-10'>
        <input type="text" placeholder='search' 
        className= "text-black w-[200px] sm:w[200px]  bg-white group-hover:w[300px] transition-all duration-300 rounded-full border border-gray-400 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary gap- " />
        <FaSearch  className=' text-gray-500 group-hover:text-purple-800 absolute top-1/2 -translate-y-1/2 right-3  cursor-pointer'/>
        </div>
         
         <div className='mr-3'>
                 
         <div>
               
               { isAuthenticated &&
                <p className='text-white'>
                  welcome
                  <br />
                  {user.name}
                </p>
                 
               }
                </div>  


                 {isAuthenticated ? (
                  <Link to="/Login">
                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        <MdAccountCircle className="text-3xl cursor-pointer" />
                   </button>
                   </Link>
                  ) : (
                    <Link to="/Login">  
                    <button onClick={() => loginWithRedirect()}>
                      <MdAccountCircle className="text-3xl cursor-pointer" />
                    </button>
                    </Link>
                  )}
                  

            
         
         </div>
         <div className='mr-6 items-center'>
        <Link to={'/Add'}>
        
        <FaShoppingCart  className='text-3xl'/>
        </Link>
         </div>
         
               
                
    

     </div >


 <div className='bg-gray-800 ' >
 <button onClick={Togglemenu} className="sm:hidden" aria-expanded={isMenuOpen}>
  <span className="text-white text-2xl">☰</span>
</button>

{/* Mobile Menu */}
{isMenuOpen && (
  <div className="bg-gray-800 p-6 sm:hidden">
    <ul className="flex flex-col space-y-2">
      <li>
        <Link to="/Home" className="text-white">Home</Link>
      </li>
      {/* <li>
        <Link to="/Toprated" className="text-white">Toprated</Link>
      </li> */}
      <li>
        <Link to="/Mens" className="text-white">Mens</Link>
      </li>
      <li>
        <Link to="/Kidswear" className="text-white">Kidswear</Link>
      </li>
      <li>
        <Link to="/Women" className="text-white">Women</Link>
      </li>
      {/* <li>
        <Link to="/Trending" className="text-white">Trending</Link>
      </li> */}
    </ul>
  </div>
)}

 
{/* Desktop Menu */}
<div className="hidden sm:block bg-gray-800 shadow-md p-2">
  <nav>
    <ul className="flex flex-col md:flex-row items-center justify-center space-x-16">
      <li>
        <Link to="/Home" className="bg-blue-500 px-1 hover:bg-blue-600 rounded-full transition duration-200 text-xl">Home</Link>
      </li>
      {/* <li>
        <Link to="/Toprated" className="bg-green-500 px-1 hover:bg-green-600 rounded-full transition duration-200 text-xl">Toprated</Link>
      </li> */}
      <li>
        <Link to="/Mens" className="bg-amber-600 px-1 hover:bg-amber-600 rounded-full transition duration-200 text-xl">Mens</Link>
      </li>
      <li>
        <Link to="/Kidswear" className="bg-yellow-500 px-1 hover:bg-yellow-600 rounded-full transition duration-200 text-xl">Kidswear</Link>
      </li>
      <li>
        <Link to="/Women" className="bg-pink-500 px-1 hover:bg-pink-600 rounded-full transition duration-200 text-xl">Women</Link>
      </li>
      {/* <li>
        <Link to="/Trending" className="bg-purple-500 px-1 hover:bg-purple-600 rounded-full transition duration-200 text-xl">Trending</Link>
      </li> */}
    </ul>
  </nav>
</div>

</div>


        {/* <Electronic/> */}
      
       
       
    </div>
    
  )
}

export default Header