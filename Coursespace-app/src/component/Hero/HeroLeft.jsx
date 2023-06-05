import React from 'react'
import Button from '../Button/Button'

const HeroLeft = () => {
  return (
    <div style={{marginBottom:'7.5rem'}}>
        <h1 style={{fontSize:'4rem',lineHeight:'6rem'}}><span style={{color:'#127C71'}}>Improve</span> your Skill with Different Way</h1>
        <p style={{lineHeight:'1.6rem', marginTop:'1.5rem', fontSize:'1.1rem', color:'grey'}}>Let's take an online course to improve your skills 
              in a different way, <br />
             you can set your own study time according to your learning speed. 
            So <br />you san study comfortable and absorb tge material easily.</p>
            
            <div style={{display:'flex', gap:'1.2rem', marginTop:'3rem'}}>
              <Button saheed = 'Get Started' txtColor='white'  bg ='#127C71' />
              <Button saheed =  'Watch Video' txtColor='#127C71' bg='white'/>
            </div>

           
           

      
    </div>
  )
}

export default HeroLeft
