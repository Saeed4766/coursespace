import React from 'react'
import Card from './Card'
import ImageA from '../../assets/images/ImageA.jpg'
import ImageC from '../../assets/images/ImageC.jpg'
import ImageD from '../../assets/images/ImageD.jpg'
import './courseSect.css'
import Strollbtn from './Strollbtn'


const CourseSect = () => {
  return (
    <div className='parent'  style={{backgroundColor:'#f2f5f5'}}>
      
        <div className="wrapper">
            
           
            <h2>Most <br /> Popular <br /> Courses</h2>
           

            <div className="cardWrapper">
                <Card image= {ImageA} title= 'UI/UX Complete Guide' rating='15' price='35'/>
                <Card image= {ImageD} title= 'Mastering Data Modelling' rating='12' price='25'/>
                <Card image= {ImageC} title= 'Android Development from zero to Hero' rating='12' price='25'/>
            </div>
        </div>
        {/* <Strollbtn/> */}
     
    </div>
  )
}

export default CourseSect
