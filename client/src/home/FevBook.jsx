import React from 'react'
import FavBookImg from '../assets/banner-pic.png'
import { Link } from 'react-router-dom'

const FevBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-14'>
      <div className='md:w-1/2'>
        <img src={FavBookImg} alt="" className='rounded md:w-10/12' />
      </div> 
      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite
        <span className='text-blue-700'> Books Hear!</span></h2>
        <p className='mb-10 tect-lg md:w-5/6'>
          To Kill a Mockingbird by Harper Lee, 
          Pride and Prejudice by Jane Austen,   
          The Great Gatsby by F. Scott Fitzgerald, 
          The Catcher in the Rye by J.D. Salinger, 
          The Hobbit by J.R.R. Tolkien, 
          The Harry Potter series by J.K. Rowling,  
          Brave New World by Aldous Huxley, 
          Moby-Dick by Herman Melville, 
          Frankenstein by Mary Shelley, 
          Jane Eyre by Charlotte Brontë, 
          Wuthering Heights by Emily Brontë, 
          Great Expectations by Charles Dickens, 
          A Tale of Two Cities by Charles Dickens, 
          The Picture of Dorian Gray by Oscar Wilde, 
          The Grapes of Wrath by John Steinbeck, 
          The Shawshank Redemption by Stephen King, 
          The Kite Runner by Khaled Hosseini, 
          The Book Thief by Markus Zusak, 
          Slaughterhouse-Five by Kurt Vonnegut,  
          The Alchemist by Paulo Coelho, 
          The Secret Life of Bees by Sue Monk Kidd, 
          The Road by Cormac McCarthy, 
          The Da Vinci Code by Dan Brown, 
          The Color Purple by Alice Walker.</p>
         <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
             <h3 className='text-3xl font-bold'>1000+</h3>
             <p className='text-base'>Book Listing</p>
          </div>
          <div>
             <h3 className='text-3xl font-bold'>600+</h3>
             <p className='text-base'>Register User</p>
          </div>
          <div>
             <h3 className='text-3xl font-bold'>400+</h3>
             <p className='text-base'>Pdf Downloads</p>
          </div>
         </div>
         <Link to='/shop' className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded
          hover:bg-black transition-all duration-300'>Explor More</button></Link>
      </div> 
    </div>
  )
}

export default FevBook