import React from 'react'
import Header from './Header'
import SubscribeInput from './SubscribeInput'

const Newsletter = () => {
  return (
    <div style={{backgroundColor:'#ffaf35', Width:'56rem', 
    padding:'5rem 4rem', borderRadius:'2.5rem', textAlign:'center', margin:'3rem'}}>
      <Header/>
      <SubscribeInput/>
    </div>
  )
}

export default Newsletter
