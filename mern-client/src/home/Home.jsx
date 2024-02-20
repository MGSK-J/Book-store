import React from 'react'
import Banner from '../components/Banner'
import FavouriteBooks from './FavouriteBooks'

const Home = () => {
  return (
    <div className=''>
      {/*<div className='h-screen'>Home</div>
      <div className='h-screen bg-red-600'>    
  </div>*/}
    <div>
      <Banner/>
      <FavouriteBooks/>
    </div>
    
    </div>
  )
}

export default Home
