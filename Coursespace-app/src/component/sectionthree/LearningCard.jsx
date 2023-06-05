import React from 'react'

const LearningCard = (props) => {
  return (
    <div>
        <div className="wrapper" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          
          <div className="img">
            <img src={props.image} alt=""  style={{width:'3rem', height:'3rem'}}/>
          </div>
          <div className="content">
            <h3 style={{marginBottom:'.7rem', color:'#ffaf35', fontSize:'1.1rem'}}>{props.title}</h3>
            <p style={{color:'#717171'}}>Duis aute irure dolor in reprehenderit in <br />  voluptate velit esse cillum dolore</p>
          </div>

        </div>

    </div>
  )
}

export default LearningCard
