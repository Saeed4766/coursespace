import React from 'react'
import Header from './Header'
import Card from './Card'
import Jhon from '../../assets/images/mentors/Jhon.jpg'
import Leon from '../../assets/images/mentors/Leon.jpg'
import Nguyen from '../../assets/images/mentors/Nguyen.jpg'
import Grab from '../../assets/images/icons/Grab.png'
import Google from '../../assets/images/icons/Google.png'
import Airbnb from '../../assets/images/icons/Airbnb.png'


const Mentors = () => {
  return (
    <div className='parent' style={{backgroundColor:'#ecf3f3', display:'block', marginBottom:'6rem'}}>

      <div className='Mentor_wrapper' >
         <Header/>
      </div>
      
         
      
      <div className='mentor_card_wrapper' style={{display:'flex', justifyContent:'center', alignItems:'center',gap:'1.5rem'}}>
          <Card  image ={Jhon} title = {'UI/UX-Design'}  name = {'Jhon-Dwirian'}  icon ={Grab} />
          <Card  image ={Leon} title = {'Machine-Learning'}  name = {'Leon-Kennedy'}  icon ={Google} />
          <Card  image ={Nguyen} title = {'Android-Development'}  name = {'Nguyen-Thuy'}  icon ={Airbnb} />
      </div>
     


    </div>
  )
}

export default Mentors
