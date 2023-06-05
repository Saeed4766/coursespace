import React from 'react'
import LeftSect from './LeftSect'
import RightSect from './RightSect'

const Learning = () => {
  return (
    <div className='parent' style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'6rem'}}>
      <LeftSect/>
      <RightSect/>
    </div>
  )
}

export default Learning
