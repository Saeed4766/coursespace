import React from 'react'
import RightHead from './RightHead'
import LeftFlexImg from './LeftFlexImg'

const Testimonial = () => {
  return (
    <div className='parent' style={{marginTop:'2rem'}}>

        <div className="wrapper" style={{display:'flex', justifyContent:"center", alignItems:'center', gap:'6rem'}}>
            <RightHead/>
            <LeftFlexImg/>
        </div>
      
    </div>
  )
}

export default Testimonial
