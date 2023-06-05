import React from 'react'
import LuisSera from '../../assets/images/avatars/LuisSera.jpg'
import arrowbtn from '../../assets/images/arrowbtn.png'

const RightFlexWrap = () => {
  return (
    <div className='wrapper' style={{display:'flex', justifyContent:'center', alignItems:'center', gap:"1rem"}}>

      <div className='image' >
        <img src={LuisSera} alt="" style={{width:'4rem' , height:'4rem', borderRadius:'50%', marginTop:'2rem'}}/>
      </div>

      <div style={{display:'flex', justifyContent:'center',alignItems:'center', gap:'15rem', marginTop:'2rem'}}>
        
        <div>
            <h3>Luis Sera</h3>
            <p style={{color:"#717171", fontSize:'1rem', fontWeight:'400', lineHeight:'1.1'}}>UI/UX Engineer</p>
        </div>

        <div>
                <img src={arrowbtn} alt="" style={{width:'1.5rem', height:'1.5rem'}}/>
        </div>

      </div>
      
    </div>
  )
}

export default RightFlexWrap
