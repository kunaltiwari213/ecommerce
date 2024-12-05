import React from 'react'
import img1 from '../../../assets/women/1.jpg'
import img2 from '../../../assets/women/2.jpg'
import img3 from '../../../assets/women/3.jpg'
import img4 from '../../../assets/women/4.jpg'
import img5 from '../../../assets/women/5.jpg'
import { Link } from 'react-router-dom'
import Add from '../../Other/Add'
import { useCart } from '../../Other/Citems'

const Kurtis = [
 
    {
        id: 1,
        img: img1,
        Product : <img src={img1} alt="" />,
        title: "Kurti",
        rating: 5.0,
        color: "",
        aosDelay: "0",
        Price:1500,
        Toprated:"No"   
    },
    {
        id: 2,
        img: img2,
        Product : <img src={img2} alt="" />,
        title: "Kurti",
        rating: 5.0,
        color: "",
        aosDelay: "0",
        Price:1500,
        Toprated:"No"   
    },
    {
        id: 3,
        img: img3,
        Product : <img src={img3} alt="" />,
        title: "Kurti",
        rating: 5.0,
        color: "",
        aosDelay: "0",
        Price:1500,
        Toprated:"No"   
    },
    {
        id: 4,
        img: img4,
        Product : <img src={img4} alt="" />,
        title: "Kurti",
        rating: 5.0,
        color: "",
        aosDelay: "0",
        Price:1500,
        Toprated:"No"   
    },
    {
        id: 5,
        img: img5,
        Product : <img src={img5} alt="" />,
        title: "Kurti",
        rating: 5.0,
        color: "",
        aosDelay: "0",
        Price:1500,
        Toprated:"No"   
    },
]

function Kurti() {
  const { addToCart } = useCart();
  return (

    <div>
      <div>
        <h1 className='text-3xl font-mono font-bold flex justify-items-start mt-4 underline'>Kurti </h1>
      </div>
      <div className=' flex flex-wrap justify-evenly mt-5 ' >
       {Kurtis.map(({id,title,img,Price})=>(
        <div key={id} className='hover:bg-slate-500 mt-10 p-4 rounded-lg transition-all flex flex-col items-center'>
          <div className='hover:bg-slate-600'>
                <img src={img} alt=""  className='h-[220px] w-[150px] object-cover  '/>
                
                  <h1 className='font-bold'>{title}</h1>
                  <h2 className='font-bold'> ₹ :{Price}</h2>
                </div>
                <div>
                  <button onClick = {()=> addToCart({id, title,img, price: Price})}
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

export default Kurti