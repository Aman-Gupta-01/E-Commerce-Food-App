import React from 'react';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementQty, incrementQty, removeFormCart } from '../redux/slice/cartSlice';
import toast from 'react-hot-toast';

function ItemCard({ id, name, price, img, qty }) {
  const dispatch = useDispatch();

  return (
    <div className='bg-gray-100 flex items-center gap-4 rounded-xl shadow-lg border mb-4 p-4 relative'>
      {/* Delete button positioned at top right using flex instead of absolute */}
      <MdDelete 
        onClick={() => {
          dispatch(removeFormCart({ id, img, name, price, qty })),
          toast.error(`${name} Removed!`)
        }} 
        className='text-gray-600 cursor-pointer hover:text-red-600 transition-all absolute top-2 right-2' 
      />
      
      <img
        className='w-[70px] h-[70px] rounded-xl'
        src={img} 
        alt="food Img" 
      />

      <div className='flex-1'>
        <h2 className='font-bold mt-1'>{name}</h2>
        <div className='flex items-center justify-between pt-2'>
          <span className='text-green-500 font-bold'>₹{price}</span>
          
          {/* Quantity controls inside a flex container to keep them aligned */}
          <div className='flex items-center gap-2'>
            <CiCircleMinus onClick={()=> qty > 1 ? dispatch(decrementQty({id})) : dispatch(removeFormCart({ id }))} className='cursor-pointer text-2xl hover:text-red-500 transition-all ease-in-out active:bg-red-500 rounded-full active:text-white' />
            <span className='text-blue-500'>{qty}</span>
            <CiCirclePlus onClick={()=>dispatch(incrementQty({id}))} className='cursor-pointer text-2xl hover:text-green-500 transition-all ease-in-out active:bg-green-500 rounded-full active:text-white' />
          </div>
        </div>
      </div>
    </div> 
  );
}

export default ItemCard;
