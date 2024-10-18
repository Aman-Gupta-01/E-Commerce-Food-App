import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

function Cart() {

  const navigate = useNavigate()

  const [activeCart, setActiveCart] = useState(false)

  const cartItem = useSelector( (state) => state.cartReducer.cart )
  const totalQty = cartItem.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItem.reduce((total, item)=> total + item.qty * item.price, 0)

  return (
    <>
    <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}>
        <div className='flex justify-between items-center my-3 '>
            <span className='font-bold text-xl text-gray-800'>My Cart</span>
            <MdClose onClick={() => setActiveCart(!activeCart)} className='active:scale-95 select-none cursor-pointer border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:border-red-300 hover:text-red-300' />
        </div>

        <div className='overflow-y-scroll no-scrollbar h-[25rem]'>
  
         {cartItem.length > 0 ? (
          cartItem.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>
        )}

        <div className='absolute bottom-0'>
        <h3 className='font-semibold text-gray-800'>Items : {totalQty}</h3>
        <h3 className='font-semibold text-gray-800'>Total Amount : {totalPrice}</h3>
        <hr />
        <button onClick={()=> navigate("/success")} className='bg-green-500 shadow-lg h-16 font-bold px-3 py-2 rounded-lg w-[90vw] lg:w-[18vw] active:scale-95 my-5 transition'>Check Out</button>
    </div>
    </div>

    </div>    

    <FaCartShopping 
    onClick={() => setActiveCart(!activeCart) }
    className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4  
      ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`
    }
      />
    </>
  )
}

export default Cart
