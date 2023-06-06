import React from 'react'
import homehero from '../../assets/images/home-hero.jpg'
import certificate from '../../assets/images/certificate.png'
 
const HeroRight = () => {
  return (
    <div>
        <img src={homehero} alt="" style={{width:'30rem', height:'32rem'}}/>
        
        <div style={{display:'flex', gap:'1rem',position:'absolute', right:'33rem', top:'31rem'}}>
            <img src={certificate} alt=""  style={{width:'2rem', height:'2rem'}}/>
            <div style={{display:'flex', flexDirection:'column'}}>
              <h3 style={{color:'#ffaf35'}}>Certificate</h3> 
              <p style={{color:'grey'}}>There are certificates for all <br /> courses.</p>
            </div> 
        </div> 
    </div>
  )
}

export default HeroRight
