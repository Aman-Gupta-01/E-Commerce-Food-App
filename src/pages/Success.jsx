import React, { useEffect, useState } from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

function Success() {

  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>

      {
        loading ? <PropagateLoader color="rgb(34 197 94 )" /> : <div className='flex flex-col items-center justify-center h-screen'>
        <h2 className='font-bold text-5xl italic mb-4 text-green-500'>Order Successful!</h2>
        <p className='font-semibold'>Order is Sucessfully Placed</p>
      </div>
      }
     
    </div>
  )
}

export default Success