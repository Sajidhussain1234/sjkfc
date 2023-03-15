import React from 'react'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'
import Navbar from '../components/Navbar' 

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='container mt-2'>  
        <MainContent />    
      </div>
      <hr />
      <div className='text-bg-secondary' style={{height: "35vh"}} >
      <Footer/>
      </div>
    </div>
  )
}

export default Home