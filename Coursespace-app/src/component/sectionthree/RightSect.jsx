import React from 'react'
import LearningCard from './LearningCard'
import certificate from '../../assets/images/certificate.png'

const RightSect = () => {
  return (
    <div>
        <h2 style={{fontSize:'3rem', marginBottom:'2rem'}}>Make your <span style={{color:'#127C71'}}>Learning</span><br /> Enjoyable</h2>
        <p style={{color:'grey', fontSize:'1.1rem', wordSpacing:'.2rem'}}>Set the way of learning according to your wishes with some of the benefits that you get us, <br />
            so you on enjoy the lessons that we provide.</p>

        <div className="card-wrapper" style={{display:'flex', justifyContent:'center', 
        alignItems:'center', gap:'1rem', marginBottom:'2rem', marginTop:'4rem'}}>
            <LearningCard image={certificate} title='Easy Accessable' />
            <LearningCard image={certificate} title='More Affordable Cost'/>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'1rem'}}>
            <LearningCard image={certificate} title='Flexible Study Time'/>
            <LearningCard image={certificate} title='Consultation With Mentor'/>
        </div>
    </div>
  )
}

export default RightSect
