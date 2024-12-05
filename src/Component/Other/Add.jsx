import React from 'react';
import { useCart } from './Citems';


function Add() {
    const { cart } = useCart();
   

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="p-5 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="font-bold text-3xl mb-4">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
            ) : (
                <div className='flex flex-col'>
                    <ul className="space-y-4">
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-md">
                                <div className="flex items-center">
                                    <img src={item.img} alt={item.title} className='h-24 w-auto rounded-md' />
                                    <span className="ml-4 font-semibold">{item.title}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="font-bold text-lg">₹{item.price}</span>
                                    <button className="ml-6 text-red-500 hover:text-red-700 transition" onClick={() => { handleRemoveItem(item.id) }}>
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className='flex justify-between items-center'>
                    <div className="mt-6 font-bold text-xl">
                        Total: <span className="text-green-600">₹{totalPrice}</span>
                    </div>
                    <div>
                        <button className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300'>
                            Checkout
                        </button>
                    </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Add;
