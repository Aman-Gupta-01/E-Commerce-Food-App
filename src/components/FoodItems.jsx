import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

function FoodItems() {

  const category = useSelector((state)=> state.categoryReducer.category )

  const search = useSelector((state)=>state.searchReducer.search)

  const handleToast = (name) =>  toast.success(`${name} Added`)

  return (
    <>
    
      <Toaster position="top-center" reverseOrder={false}/>

      <div className='flex flex-wrap gap-10 my-10 justify-center'>
        
        {
          FoodData.filter((food)=>{
            if (category === "All") {
              return food.name.toLowerCase().includes(search.toLowerCase());
            } else {
              return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
            }
          }).map((food)=>{
            return <FoodCard 
              key={food.id} 
              id={food.id} 
              img={food.img} 
              name={food.name}
              price={food.price}
              desc={food.desc}
              category={food.category}
              rating={food.rating}
              handleToast={handleToast}
              />
          })
        }

      </div>
    </>
  )
}

export default FoodItems