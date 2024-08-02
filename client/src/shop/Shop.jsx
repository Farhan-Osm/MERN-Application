import { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
import {useNavigate} from 'react-router-dom';

const Shop = () => {

  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  useEffect (() => {
      fetch('http://localhost:3000/all-books')
    .then(res => res.json()).then(data => setBooks(data));
  }, [])


  return (
    
    <div className='mt-28 px-4 lg:px-24 '>
      <h2 className='text-5xl font-bold text-center'>All Books Are Hare!</h2>

      <div className='grid gap-8 mt-16 mb-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {
          books.map (book =>
          <Card className="max-w-sm">
              <img src={book.imageURL} alt="" className='h-96'/>       
              <h2 className='text-sm'>Book-Name: {book.bookTitle}</h2>
              <h2>Auth-Name: {book.authorName}</h2>
            <div className=' flex items-center text-gray-900'>
              <p className='font-semibold mt-3 '>₹{book.price}</p>
              <p className='opacity-50 line-through mt-3 px-2'>₹{book.totalprice}</p>
              <p className='text-green-600 font-semibold mt-3 px-4'>{book.discountPercentage}% off</p>
            </div>
              <button onClick={() => navigate("/checkout")} className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
         </Card> 
            
          )
        }
      </div>
    </div>

  )
}

export default Shop