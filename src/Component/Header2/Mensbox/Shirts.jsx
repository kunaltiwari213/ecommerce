import React from 'react';
import Img1 from "../../../assets/MENS/One.png";
import Img3 from "../../../assets/MENS/Five.jpg";
import Img4 from "../../../assets/MENS/Four.png";
import Img6 from "../../../assets/MENS/Six.jpeg";
import Img7 from '../../../assets/MENS/9.jpg';
import Img8 from '../../../assets/MENS/ten.jpg';
import Img9 from '../../../assets/MENS/11.jpg';
import Img10 from '../../../assets/MENS/12.jpg';
import Img11 from '../../../assets/MENS/13.jpg';
import Img12 from '../../../assets/MENS/14.jpg';
import { useCart } from '../../Other/Citems';

const Shirts = [
    { id: 1, img: Img1, title: "Shirt", rating: 5.0, Price: 300 },
    { id: 2, img: Img3, title: "Shirt", rating: 3.0, Price: 350 },
    { id: 3, img: Img4, title: "Shirt", rating: 5.0, Price: 300 },
    { id: 4, img: Img6, title: "Shirt", rating: 5.0, Price: 268 },
    { id: 5, img: Img7, title: "Shirt", rating: 5.0, Price: 268 },
    { id: 6, img: Img8, title: "Shirt", rating: 5.0, Price: 268 },
    { id: 7, img: Img9, title: "Shirt", rating: 5.0, Price: 268 },
    { id: 8, img: Img10, title: "Shirt", rating: 5.0, Price: 268 },
    { id: 9, img: Img11, title: "Shirt", rating: 5.0, Price: 268 },
    { id: 10, img: Img12, title: "Shirt", rating: 5.0, Price: 268 },
];

function Shirt() {
    const { addToCart } = useCart();

    return (
        <div>
            <h1 className='font-bold text-xl flex justify-start p-2'>Men's Shirts</h1>
            <div className="flex flex-wrap justify-evenly gap-5">
                {Shirts.map(({ id, img, title, Price }) => (
                    <div key={id} className='hover:bg-slate-500 p-4 rounded-lg transition-all flex flex-col items-center'>
                        <img 
                            src={img} 
                            alt={title} 
                            className='h-[220px] w-[150px] object-cover rounded-md transition-transform transform hover:scale-105' 
                        />
                        <h3 className='font-bold mt-2'>{title}</h3>
                        <p className='font-bold'>₹: {Price}</p>
                        <button
                            onClick={() => addToCart({ id, title,img, price: Price })}
                            className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 mt-4'
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shirt;
