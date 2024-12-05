import React from 'react';
// import Img1 from "../../assets/MENS/one.png";
// import Img2 from "../../assets/MENS/Two.png";
// import Img3 from "../../assets/MENS/Three.jpg";
// import Img4 from "../../assets/MENS/Four.png";
// import Img5 from "../../assets/MENS/Five.jpg";
import Shirt from '../Header2/Mensbox/Shirts';
import Tshirts from '../Header2/Mensbox/Tshirts'
import Jeans from '../Header2/Mensbox/Jeans';
import Footer from '../Navbar/Footer';



function Men() {
  return (
    <>
    <div>
    <Shirt/>
    <Tshirts/>
    <Jeans/>
    </div>
    <div className='bottom-0 left-0'>
     <Footer />
     </div>
     
    </>
  );
}

export default Men;
