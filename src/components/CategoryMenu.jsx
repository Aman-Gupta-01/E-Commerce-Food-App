import React, { useEffect, useState } from 'react'
import FoodData from '../data/FoodData'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../redux/slice/categorySlice'


function CategoryMenu() {

  const [categories, setCategories] = useState([])

  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category ))];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
    
  }

  useEffect(()=>{
    listUniqueCategories();
  }, [])

  const dispatch = useDispatch()
  const selectCategory = useSelector((state)=> state.categoryReducer.category)

  return (
    <div className='font-semibold text-sm mx-6 lg:pl-10'>
        <h3>Find Food for Your Mood</h3>
        <div className='my-6 gap-3 flex overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button onClick={()=> dispatch(setCategory("All"))}
            className={`px-3 py-2 hover:shadow-lg active:scale-95 rounded-full bg-gray-200 font-bold hover:bg-blue-400 hover:text-gray-200 border-2 border-gray-500 hover:border-gray-300 ${selectCategory === "All" && "bg-green-500 text-white"}`}>
              All
        </button>
            {
              categories.map((category, index)=>{
                return(
                  <button onClick={()=> dispatch(setCategory(category))}
                  key={index} className={`px-3 py-2 hover:shadow-lg active:scale-95 rounded-full bg-gray-200 font-bold hover:bg-blue-400 hover:text-gray-200 border-2 border-gray-500 hover:border-gray-300 ${selectCategory === category && "bg-green-500 text-white"}`}>
                    
                    {category}

                  </button>
                )
              })
            }
        </div>
    </div>
  )
}

export default CategoryMenu