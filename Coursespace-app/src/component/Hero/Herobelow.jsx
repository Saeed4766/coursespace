import React from 'react'
import './Herobelow.css'

const Herobelow = () => {
  return (
    <div className='parent'>
        <div className="wrapper">
            <div className='children'>
                <p className='features' style={{fontWeight:'900', color:'#ffaf35'}}>10K<span style={{fontSize:'1.5rem', fontWeight:'900'}}>+</span></p>
                <h5 style={{fontSize:'1.2rem', fontWeight:'900', color:'grey'}}>Students</h5>
            </div>
            <div className='children'>
                <p className='features'  style={{fontWeight:'900', color:'#ffaf35'}}>20<span style={{fontSize:'1.5rem', fontWeight:'900'}}>+</span></p>
                <h5 style={{fontSize:'1.2rem', fontWeight:'900', color:'grey'}}>Quality Course</h5>
            </div>
            <div className='children'>
                <p className='features'  style={{fontWeight:'900', color:'#ffaf35'}}>10<span style={{fontSize:'1.5rem', fontWeight:'900'}}>+</span></p>
                <h5 style={{fontSize:'1.2rem', fontWeight:'900',  color:'grey'}}>Experience Mentors</h5>
            </div>
        </div>
        
    </div>
  )
}

export default Herobelow
