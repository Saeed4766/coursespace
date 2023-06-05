import React from 'react'

const SubscribeInput = () => {
  return (
   
   <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'1.5rem'}}>
      
      <input type="text" placeholder='Enter your Email Adrress' style={{padding:'.4rem  .8rem',
       boxSizing:'content-box', height:'1.8rem', 
      display:'block', width:'30rem' ,textAlign:'start',cursor:'text', borderRadius:'.7rem', border:'white'}}/>

      <button style={{cursor:"pointer", fontSize:'1rem', borderRadius:'.9rem', 
      padding:'.9rem 1.2rem', color:'white', backgroundColor:'#127C71',
       boxShadow:'0 6px 22px 0 rgb(18 124 113 / 12%)',border:'none',verticalAlign:'middle'}}>
        <span>Subscribe</span>
      </button>
    </div>
  )
}

export default SubscribeInput

