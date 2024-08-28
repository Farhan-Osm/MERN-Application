import React from 'react'
import { useLoaderData } from 'react-router-dom'

  const SingleBook = () => {

  const {bookTitle,imageURL,authorName,price,totalprice,discountPercentage} = useLoaderData();

  const discountPrice = totalprice*discountPercentage/100

  const actualPrice = totalprice-discountPrice

  return (
  <>

   <div className='flex relative'>
    <div className='shadow-2xl mt-28 px-4 lg:px-24 w-2/3'>
      <img src={imageURL} alt='' className='h-66 w-36'/>
      <h2>{bookTitle}</h2>
      <h2>{authorName}</h2>
      <div className=' flex items-center text-gray-900'>
        <p className='font-semibold mt-3 '>₹{actualPrice}</p>
        <p className='opacity-50 line-through mt-3 px-2'>₹{totalprice}</p>
        <p className='text-green-600 font-semibold mt-3 px-4'>{discountPercentage}% off</p>
    </div>
    </div>
    <div className='px-5  w-1/4 '>
      <div className='border mt-28'>
       <p className='uppercase font`opacity-60 pb-4'> Price Details</p>
       <hr/>
       <div className='space-y-3 font-semibold'>
        <div className='flex justify-between pt-3 text-black'>
          <span>Price</span>
          <span>₹{totalprice}</span>
        </div>  
        <div className='flex justify-between pt-3 '>
          <span>Discount</span>
          <span className='text-green-600'>₹{discountPrice}</span>
        </div> 
        <div className='flex justify-between pt-3 '>
          <span>Delivery Charge</span>
          <span className='text-green-600'>free</span>
        </div> 
        <div className='flex justify-between pt-3 '>
          <span>Total Amount</span>
          <span className='text-green-600'>₹{actualPrice}</span>
        </div> 
       </div>
       <button className='mt-8 uppercase bg-violet-600 text-white w-full h-8'>Checkout</button>
      </div>
    </div>
   </div>
  </>
  )
}

export default SingleBook