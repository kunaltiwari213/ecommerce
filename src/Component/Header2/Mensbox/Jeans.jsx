import React from 'react'
import img1 from '../../../assets/MENS/Jeans/1.avif';
import img4 from '../../../assets/MENS/Jeans/4.avif';
import img2 from '../../../assets/MENS/Jeans/2.jpg';
import img3 from '../../../assets/MENS/Jeans/3.jpg';
import img5 from '../../../assets/MENS/Jeans/5.jpg';
import { Link } from 'react-router-dom';
import Add from '../../Other/Add'
import { useCart } from '../../Other/Citems';
 
const JeansData=[
  

    {
      id: 111,
      img: img1,
      Product : <img src={img1}/>,
      title: "Shirt",
      rating: 5.0,
      color: "",
      aosDelay: "0",
      Price:300,
      Toprated:"No"
    },
    {
      id: 112,
      img: img2,
      Product : <img src={img1}/>,
      title: "Shirt",
      rating: 5.0,
      color: "",
      aosDelay: "0",
      Price:300,
      Toprated:"No"
    },
    {
      id: 113,
      img: img3,
      Product : <img src={img1}/>,
      title: "Shirt",
      rating: 5.0,
      color: "",
      aosDelay: "0",
      Price:300,
      Toprated:"No"
    },
    {
      id: 114,
      img: img4,
      Product : <img src={img1}/>,
      title: "Shirt",
      rating: 5.0,
      color: "",
      aosDelay: "0",
      Price:300,
      Toprated:"No"
    },
    {
      id: 115,
      img: img5,
      Product : <img src={img1}/>,
      title: "Shirt",
      rating: 5.0,
      color: "",
      aosDelay: "0",
      Price:300,
      Toprated:"No"
    },


  
]

function Jeans() {
  const { addToCart } = useCart();  
  return (
    <div>
         <div>

          <h1 className='text-xl font-bold  flex justify-start underline mt-10 mb-8'>Jeans</h1>
          </div>   
          <div className='flex flex-wrap justify-evenly cursor-pointer gap-20'>

            {JeansData.map(({id, img, title, Price})   =>(
               <div key={id} className='hover:bg-slate-500 mt-10 p-4 rounded-lg transition-all flex flex-col items-center' >

              
               <div className='hover:bg-slate-600'>
                
                <img src={img} alt={title} 
                className='h-[200px] w-[150px] object-cover '/>
                <h1 className='font-bold'>{title}</h1>
                <h1 className='font-bold'> ₹ :{Price}</h1>
               </div>
               <div>
                
               <button onClick={() => addToCart({ id, title,img, price: Price })}
                            className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 mt-4'
                        >
                            Add to Cart
                        </button>
               </div>
               </div>
            ))}
            
          </div>      
    </div>
  )
}

export default Jeans