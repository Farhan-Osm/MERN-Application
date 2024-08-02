// import React from 'react'
import Banner from '../components/Banner'
import BestSallerBook from './BestSallerBook'
import FevBook from './FevBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'



const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSallerBook/>
      <FevBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </div>
  )
}

export default Home