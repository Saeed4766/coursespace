import React from 'react'
import {useNavigate} from 'react-router-dom'

const Products = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>This is the PRODUCTS page</h1>
        <button onClick={()=>navigate('new')}new>New</button>
        <button onClick={()=>navigate('old')}new>Old</button>
        
    </div>
  )
}

export default Products
