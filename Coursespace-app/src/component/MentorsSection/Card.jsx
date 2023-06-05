import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div >
      
      <div >

        <div className="mentor_card" style={{backgroundColor:'white', padding:'1.2rem', borderRadius:'1rem'}}>
          
          <img src={props.image} alt="" style={{width:'20rem', height:'14rem', borderRadius:'.9rem'}}/>

       
          <h2 style={{ fontSize:'1.4rem', fontWeight:'700', lineHeight:'1.4'}}>{props.name}</h2>

          <p style={{color:'#717171', fontSize:'1rem', fontWeight:'400', lineHeight:'1.5', marginBottom:'1rem'}}>{props.title}</p>

          <p style={{color:'#717171', fontSize:'.85rem', fontWeight:'400', lineHeight:'1.75', marginBottom:'1rem'}}>Duis aute irure dolor in reprehenderit in voluptate velit <br /> 
          esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint <br /> occaecat cupidatat non proident,
          sunt in culpa qui officia <br /> deserunt mollit anim id est laborum.</p>


          <div className="icon">
              <img src={props.icon} alt="" style={{width:'6rem', height:'3.5rem'}}/>
          </div>

        </div>

        
      </div>

    </div>
  )
}

export default Card
