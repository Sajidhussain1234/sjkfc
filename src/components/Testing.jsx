import React from 'react'
import AddToCartContext from '../context/AddToCartContext'

const Testing = () => {
    const context = useContext(AddToCartContext); 
    const {name} = context; 

  return (
    <div>
        <h1>My name is Majid {name}</h1>
    </div>
  )
}

export default Testing