import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slice/searchSlice'


function Navbar() {
  const dispatch = useDispatch()
  return (
    <nav className='flex sm:flex-row flex-col justify-between items-center py-3 mb-10 mx-6'>
        <div>
            <h3 className='text-xl font-bold text-gray-600'>{Date().slice(0, 16)}</h3>
            <h1 className='text-2xl font-bold '>FoodMe<span className='text-xs font-bold pl-1 text-gray-600'>- Order Online</span></h1>
        </div>
        <div>
            <input 
            className='p-3 border-2 border-gray-300 rounded-full outline-none w-full lg:w-[50vh]'
            type="search" 
            name="Search" 
            placeholder='Search Cravings' 
            onChange={(e)=> dispatch(setSearch(e.target.value))}
            autoComplete='off' />
        </div>
    </nav>
  )
}

export default Navbar