import React from 'react'
import BannerCard from '../home/Bannercard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side  */}
            <div className='md:w-1/2 space-y-8'>  
                <h2 className='text-6xl font-bold leading-snug text-black'>Buy And Sell Your Books
                <span className='text-blue-700'>For The Best Prices</span></h2>
                <p className='md:w-4/5 text-lg'>A great website shows the world who you are, 
                makes people remember you, and helps potential customers understand 
                if they found what they were looking for. Websites communicate all of 
                that through color, shape and other design elements. 
                Learn how to make your book sell and buy in this website.</p>
                <div>
                    <input type="search"  name='search' id='search' placeholder='Search a book' className='py-2 px-3 rounded-s-sm outline-none border-none'/>
                    <button className='bg-blue-700 px-5 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>
            {/* right side */}
            <div><BannerCard/></div>
        </div>
    </div>
  )
}

export default Banner