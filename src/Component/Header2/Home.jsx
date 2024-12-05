import React from 'react'
import Img1 from "../../assets/MENS/one.png";
import Img2 from "../../assets/MENS/Two.png";
// import Img3 from "../../assets/MENS/Three.png";
import Img4 from "../../assets/MENS/Four.png";
// import Img5 from "../../assets/MENS/Five.png";
import Mens from '../Header2/Men';
import Hero from '../Navbar/Hero';
import Shirt from './Mensbox/Shirts';
import Women from './Women';
// import Header from '../Navbar/Header';
import Footer from '../Navbar/Footer';
import Kurti from './Womenbox/Kurti';

 
function Home() {
  return (
    <div >
      {/* <Header/> */}
       <Hero/>
      <Shirt/>
      <Kurti/>
      <div className='bottom-0 left-0'>
     <Footer />
     </div>
     
    </div>
  )
}

export default Home