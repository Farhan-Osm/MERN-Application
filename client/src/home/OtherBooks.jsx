import { useState, useEffect} from 'react';
import BookCard from '../components/BookCard';

const OtherBooks = () => {

    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/all-books')
      .then(res => res.json()).then(data => setBooks(data))
    },[])
  return (
    <div>
        <BookCard books={books} headLine='Other Books'/>
    </div>
  )
}

export default OtherBooks