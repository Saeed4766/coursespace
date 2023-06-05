import React from 'react'
import RightFlexWrap from './RightFlexWrap'

const RightHead = () => {
  return (
    <div>
          
        <h2 style={{fontSize:'3rem', fontWeight:'700', lineHeight:'1', marginBottom:'2rem'}}>Testimonial What our <br /> <span style={{color:'#127C71'}}> Students </span>Say</h2>

        <div>
          <h3 style={{fontSize:'1.8rem', fontWeight:'700', lineHeight:'1.4', marginBottom:'1rem'}}>Detailed learning materials</h3>
          <p style={{color:'#717171', fontSize:'1rem', fontWeight:'400', lineHeight:'1.5'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod <br /> tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br /> veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat.</p>
        </div>

        <RightFlexWrap/>
    </div>
  )
}

export default RightHead
