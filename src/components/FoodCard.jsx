import React from 'react'
import { IoStar } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice/cartSlice';

function FoodCard({ id, name, price, desc, category, img, rating, handleToast }) {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, img, qty: 1 }));
    handleToast(name);  // Trigger toast notification after adding to cart
  };

  return (
    <div className='shadow-lg font-bold w-[250px] bg-white p-5 flex flex-col gap-4 rounded-2xl'>
      <img 
        className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' 
        src={img} 
        alt={`${name} image`}  // Added meaningful alt text
      />
      <div className='text-sm font-bold flex justify-between'>
        <h2>{name}</h2>
        <span className='text-green-500 font-semibold'>₹{price}</span>
      </div>
      <p className='font-normal text-sm'>{desc.slice(0, 50)}...</p>
      <div className='flex justify-between'>
        <span className='flex justify-center items-center'>
          <IoStar className='mr-2 text-yellow-500' />{rating}
        </span>
        <button 
          onClick={handleAddToCart}  // Moved logic to a separate handler
          className='text-white p-3 bg-green-500 hover:bg-green-600 rounded-lg text-sm active:scale-95'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
