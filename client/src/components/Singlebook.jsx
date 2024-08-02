import { useLoaderData } from 'react-router-dom'

const Singlebook = () => {

  const {_id, bookTitle, authorName} = useLoaderData();
  return (
    <>
    <div className='mt-28 px-4 lg:px-24 '>
      <h2>{bookTitle}</h2>
      <h2>{authorName}</h2>
    </div>
  </>
  )
}

export default Singlebook
