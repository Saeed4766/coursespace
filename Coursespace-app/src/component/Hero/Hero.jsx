import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'
import './Hero.css'
import Herobelow from './Herobelow'

const Hero = () => {
  return (
    <div className='container'>
        <div className='hero'>
            <HeroLeft/>
            <HeroRight/>
        </div>
        
        
        
      
    </div>
  )
}

export default Hero
