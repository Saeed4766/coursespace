import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'
import './Hero.css'


const Hero = () => {
  return (
    <div className='container' style={{ padding:'1rem 5rem'}}> 
        <div className='hero' style={{display:'flex',justifyContent:'center', alignItems:'center', gap:'2rem'}}>
           
            <HeroLeft/>
            <HeroRight/>
      
            
        </div>
        
        
        
      
    </div>
  )
}

export default Hero
