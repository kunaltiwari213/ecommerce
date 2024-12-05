import React from 'react';
import img1 from '../../../assets/tshirt/1.jpg';
import img2 from '../../../assets/tshirt/2.jpg';
import img3 from '../../../assets/tshirt/3.jpg';
import img4 from '../../../assets/tshirt/4.jpg';
import img5 from '../../../assets/tshirt/5.jpg';
import img6 from '../../../assets/tshirt/6.jpg';
import { Link } from 'react-router-dom';
import { useCart } from '../../Other/Citems'; // Import the custom hook

const TshirtData = [
  { id: 1, img: img1, title: "Tshirt", price: 300 },
  { id: 2, img: img2, title: "Tshirt", price: 300 },
  { id: 3, img: img3, title: "Tshirt", price: 300 },
  { id: 4, img: img4, title: "Tshirt", price: 300 },
  { id: 5, img: img5, title: "Tshirt", price: 300 },
  { id: 6, img: img6, title: "Tshirt", price: 300 },
];

function Tshirts() {
  const { addToCart } = useCart(); // Get the addToCart function from context

  return (
    <div className="p-5">
      <h1 className='font-bold text-2xl underline text-start mb-5 font-serif'>Tshirts</h1>
      <div className='flex flex-wrap justify-center gap-10'>
        {TshirtData.map(({ id, img, title, price }) => (
          <div key={id} className='hover:bg-slate-500 mt-10 p-4 rounded-lg transition-all flex flex-col items-center'>
            <img src={img} className='h-[220px] w-[150px] object-cover mb-2' alt={title} />
            <h1 className='font-bold'>{title}</h1>
            <h2 className='font-bold'>₹: {price}</h2>
            <div className='mt-2'>
              <button
                onClick={() => addToCart({ id, title, price,img, })}
                className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300'
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tshirts;
